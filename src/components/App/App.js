import { useEffect, useState, useCallback } from 'react';
import { Route, useHistory } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import HeaderMobileMenu from '../HeaderMobileMenu/HeaderMobileMenu';
import Keyboard from '../Keyboard/Keyboard';
import NewsApi from '../../utils/NewsApi';
import MainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ErrorContext from '../../contexts/ErrorContext';
import { articleIsSaved, sortByKeywordFrequency } from '../../utils/helpers';
import { IMAGE_UNAVAILABLE_URL } from '../../utils/constants';

function App() {
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [showAllNavLinks, setShowAllNavLinks] = useState(false);
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const [notFound, setNotFound] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [numCardsShown, setNumCardsShown] = useState(3);
  const [numSavedCardsShown, setNumSavedCardsShown] = useState(3);
  const [currentError, setCurrentError] = useState({ type: '' });

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('searchResults')) {
      setCards(JSON.parse(localStorage.getItem('searchResults')));
    }
    if (localStorage.getItem('savedCards')) {
      setSavedCards(JSON.parse(localStorage.getItem('savedCards')));
    }
  }, []);

  const updateCards = (newCards, setterFunction, localStorageKey) => {
    if (localStorageKey === 'savedCards') {
      newCards = sortByKeywordFrequency(newCards);
    }
    setterFunction(newCards);
    localStorage.setItem(localStorageKey, JSON.stringify(newCards));
  };

  useEffect(() => {
    MainApi.getArticles(token)
      .then((data) => {
        data.filter((card) => card.owner === currentUser._id);
        updateCards(data, setSavedCards, 'savedCards');
        cards.forEach((c) => {
          const [isSaved, id] = articleIsSaved(c, savedCards);
          if (isSaved) {
            c.isSaved = true;
            c._id = id;
          }
        });
      })
      .catch((err) => console.log(err));
  }, [loggedIn]);

  const handleChange = (event) => {
    const { target } = event;
    const { name } = target;
    const { value } = target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = { email: '', password: '', username: '' }, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  const handleInputFocus = () => {
    setShowKeyboard(!showKeyboard);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    MainApi.register(values.email, values.password, values.username)
      .then((data) => {
        if (data.message) {
          throw new Error(data.message);
        } else {
          setModalType('success');
        }
      })
      .catch((err) => setSubmitError(err.message));
  };

  const handleSignin = () => {
    setLoggedIn(true);
  };

  const handleSigninSubmit = (e) => {
    e.preventDefault();
    MainApi.authorize(values.email, values.password)
      .then((data) => {
        if (data.message) {
          throw new Error(data.message);
        }
        if (data && data.token) {
          setToken(data.token);
          localStorage.setItem('token', data.token);
          setCurrentUser({ email: values.email, name: data.username });
        } else {
          resetForm();
          if (!values.email || !values.password) {
            throw new Error('One or more of the fields were not provided');
          }
          if (!data) {
            throw new Error('Bad email or password');
          }
        }
      })
      .then(() => {
        handleSignin();
        resetForm();
      })
      .then(() => {
        setmodalIsOpen(false);
      })
      .catch((err) => setSubmitError(err.message));
  };

  useEffect(() => {
    if (token) {
      MainApi
        .getContent(token)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setLoggedIn(false);
    }
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (evt) => {
    evt.preventDefault();
    if (searchTerm.length === 0) {
      setCurrentError({ type: 'keyword' });
      return;
    }
    setIsLoading(true);
    NewsApi.getArticles(searchTerm)
      .then((data) => {
        setNotFound(data.length === 0);
        data.forEach((c) => {
          c.keyword = searchTerm;
          c.source = c.source.name;
          const [isSaved, id] = articleIsSaved(c, savedCards);
          if (isSaved) {
            c.isSaved = true;
            c._id = id;
          }
          if (!c.urlToImage || c.urlToImage.length === 0) {
            c.urlToImage = IMAGE_UNAVAILABLE_URL;
          }
        });
        setCards(data);
        setIsLoading(false);
        setSearchError('');
        localStorage.setItem('searchResults', JSON.stringify(data));
      })
      .catch(() => {
        setSearchError('server');
      });
  };

  const handleMenuIconClick = (e) => {
    if (e.target.ariaLabel === 'show-header-links-menu') {
      setShowAllNavLinks(!showAllNavLinks);
    } else {
      setShowAllNavLinks(false);
    }
  };

  useEffect(() => {
    if (modalIsOpen && windowInnerWidth < 768) {
      setShowAllNavLinks(true);
    } else if (windowInnerWidth >= 768) {
      setShowAllNavLinks(false);
    }
  }, [windowInnerWidth, modalIsOpen]);

  const handleResize = () => {
    setWindowInnerWidth(window.innerWidth);
  };

  const handleSigninButtonClick = () => {
    setmodalIsOpen(true);
    if (windowInnerWidth <= 767) {
      setShowAllNavLinks(true);
    }
    setModalType('signin');
  };

  const handleSignupButtonClick = () => {
    setmodalIsOpen(true);
    setModalType('signup');
  };

  const handleDeleteClick = (card) => {
    MainApi.deleteArticle(card._id, token)
      .then((res) => {
        if (res.ok) {
          card.isSaved = false;
          const newSavedCards = savedCards.filter((c) => c._id !== card._id);
          updateCards(newSavedCards, setSavedCards, 'savedCards');
          const newCards = cards.map((c) => (c._id === card._id ? card : c));
          updateCards(newCards, setCards, 'searchResults');
        }
      })
      .catch((err) => console.log(err));
  };

  const handleBookmarkClick = (card) => {
    if (!card.isSaved) {
      MainApi
        .saveArticle(card, token)
        .then((data) => {
          if (data.message) {
            throw new Error(data.message);
          }
          data.isSaved = true;
          const newSavedCards = [...savedCards, data];
          updateCards(newSavedCards, setSavedCards, 'savedCards');
          const newCards = cards.map((c) => (c === card ? data : c));
          updateCards(newCards, setCards, 'searchResults');
        })
        .catch((err) => console.log(err, err.message));
    } else {
      handleDeleteClick(card);
    }
  };

  const closeModal = (evt) => {
    evt.stopPropagation();
    if (evt.type === 'click' || evt.key === 'Escape') {
      resetForm();
      setmodalIsOpen(false);
    }
  };

  const handleShowMore = (num, setNum) => {
    setNum(num + 3);
  };

  const handleSignup = () => {
    setModalType('success');
  };

  const handleSignout = () => {
    localStorage.clear();
    const newCards = cards;
    newCards.forEach((c) => { c.isSaved = false; });
    setCards(newCards);
    setLoggedIn(false);
  };

  useEffect(() => {
    if (!loggedIn) {
      history.push('/');
    }
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <ErrorContext.Provider value={currentError}>
        <Route exact path="/">
          <Header
            loggedIn={loggedIn}
            isMainPage
            handleSignout={handleSignout}
            handleSigninButtonClick={handleSigninButtonClick}
            handleMenuIconClick={handleMenuIconClick}
            showAllNavLinks={showAllNavLinks}
            handleResize={handleResize}
            windowInnerWidth={windowInnerWidth}
            modalIsOpen={modalIsOpen}
            handleSearchSubmit={handleSearchSubmit}
            handleSearchChange={handleSearchChange}
            setShowAllNavLinks={setShowAllNavLinks}
            searchTerm={searchTerm}
            searchError={searchError}
          />
          <Main
            cards={cards}
            loggedIn={loggedIn}
            isLoading={isLoading}
            isMainPage
            onShowMore={handleShowMore}
            handleSigninButtonClick={handleSigninButtonClick}
            handleBookmarkClick={handleBookmarkClick}
            handleDeleteClick={handleDeleteClick}
            numCardsShown={numCardsShown}
            setNumCardsShown={setNumCardsShown}
            notFound={notFound}
            searchError={searchError}
          />
          <PopupWithForm
            modalType={modalType}
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            handleSignupButtonClick={handleSignupButtonClick}
            handleSigninButtonClick={handleSigninButtonClick}
            handleSignin={handleSignin}
            handleSignup={handleSignup}
            windowInnerWidth={windowInnerWidth}
            handleInputFocus={handleInputFocus}
            showKeyboard={showKeyboard}
            isValid={isValid}
            handleChange={handleChange}
            resetForm={resetForm}
            errors={errors}
            values={values}
            handleSignupSubmit={handleSignupSubmit}
            handleSigninSubmit={handleSigninSubmit}
            submitError={submitError}
          />
          {showAllNavLinks && (
            <HeaderMobileMenu
              loggedIn={loggedIn}
              isMainPage
              handleSignout={handleSignout}
              handleSigninButtonClick={handleSigninButtonClick}
              handleMenuIconClick={handleMenuIconClick}
              showAllNavLinks={showAllNavLinks}
              setShowAllNavLinks={setShowAllNavLinks}
              handleResize={handleResize}
              windowInnerWidth={windowInnerWidth}
              modalIsOpen={modalIsOpen}
            />
          )}
        </Route>
        <Route exact path="/saved-news">
          <Header
            loggedIn={loggedIn}
            isMainPage={false}
            cards={savedCards}
            handleSignout={handleSignout}
            handleResize={handleResize}
            handleMenuIconClick={handleMenuIconClick}
            showAllNavLinks={showAllNavLinks}
            windowInnerWidth={windowInnerWidth}
            modalIsOpen={modalIsOpen}
            handleSearchSubmit={handleSearchSubmit}
            handleSearchChange={handleSearchChange}
            searchTerm={searchTerm}
            setShowAllNavLinks={setShowAllNavLinks}
          />
          <SavedNews
            cards={savedCards}
            loggedIn={loggedIn}
            isMainPage={false}
            onShowMore={handleShowMore}
            numCardsShown={numSavedCardsShown}
            setNumCardsShown={setNumSavedCardsShown}
            handleSigninButtonClick={handleSigninButtonClick}
            handleBookmarkClick={handleBookmarkClick}
            handleDeleteClick={handleDeleteClick}
            handleResize={handleResize}
            handleMenuIconClick={handleMenuIconClick}
            showAllNavLinks={showAllNavLinks}
            windowInnerWidth={windowInnerWidth}
          />
          {showAllNavLinks && (
            <HeaderMobileMenu
              loggedIn={loggedIn}
              isMainPage={false}
              handleSignout={handleSignout}
              handleSigninButtonClick={handleSigninButtonClick}
              handleMenuIconClick={handleMenuIconClick}
              setShowAllNavLinks={setShowAllNavLinks}
              handleResize={handleResize}
              showAllNavLinks={showAllNavLinks}
              windowInnerWidth={windowInnerWidth}
              modalIsOpen={modalIsOpen}
            />
          )}
        </Route>
        {showKeyboard && <Keyboard />}
        <Footer />
      </ErrorContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
