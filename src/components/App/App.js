import { useEffect, useState, useCallback } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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

import { savedCardsArray } from '../../temporary/data';

function App() {
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState(savedCardsArray);
  const [loggedIn, setLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [showAllCards, setShowAllCards] = useState(false);
  const [showAllNavLinks, setShowAllNavLinks] = useState(false);
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const [notFound, setNotFound] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [searchError, setSearchError] = useState(false);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [userName, setUserName] = useState('');

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

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
    MainApi.register(values.email, values.password, values.username)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const handleSigninSubmit = (e) => {

  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (evt) => {
    evt.preventDefault();
    if (searchTerm.length === 0) {
      setSearchError(true);
      return;
    }
    setIsLoading(true);
    NewsApi.getArticles(searchTerm)
      .then((data) => {
        setNotFound(data.length === 0);
        setCards(data);
        setIsLoading(false);
        setSearchError(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleMenuIconClick = () => {
    setShowAllNavLinks(!showAllNavLinks);
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

  const handleBookmarkClick = (card) => {
    if (!card.isSaved) {
      card.isSaved = true;
      const newCards = cards.map((c) => (c._id === card._id ? card : c));
      savedCards.push(card);
      setCards(newCards);
      setSavedCards(savedCards);
    }
  };

  const handleDeleteClick = (card) => {
    setSavedCards(
      savedCards.filter((c) => c._id !== card._id),
    );
    card.isSaved = false;
    const newCards = cards.map((c) => (c._id === card._id ? card : c));
    savedCards.push(card);
    setCards(newCards);
  };

  const closeModal = (evt) => {
    evt.stopPropagation();
    if (!evt.type === 'keydown' || evt.key === 'Escape') {
      resetForm();
      setmodalIsOpen(false);
    }
  };

  const handleShowMore = () => {
    setShowAllCards(true);
  };

  const handleSignin = () => {
    setLoggedIn(true);
  };

  const handleSignup = () => {
    setModalType('success');
  };

  const handleSignout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <Route exact path="/">
        <Header
          loggedIn={loggedIn}
          // userName={userName}
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
          showAllCards={showAllCards}
          handleBookmarkClick={handleBookmarkClick}
          handleDeleteClick={handleDeleteClick}
          notFound={notFound}
        />
        <PopupWithForm
          modalType={modalType}
          modalIsOpen={modalIsOpen}
          onClose={closeModal}
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
        />
        {showAllNavLinks && (
          <HeaderMobileMenu
            loggedIn={loggedIn}
            // userName={userName}
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
          // userName={userName}
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
          showAllCards
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
            // userName={userName}
            isMainPage={false}
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
      {showKeyboard && <Keyboard />}
      <Footer />
    </Router>
  );
}

export default App;
