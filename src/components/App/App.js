import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import SavedNews from '../SavedNews/SavedNews.js';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

import { allCardsArray, savedCardsArray } from '../../temporary/data.js';

function App() {
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState(savedCardsArray);
  const [loggedIn, setLoggedIn] = useState(true);
  const [userName, setUserName] = useState('Kevin');
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [showAllCards, setShowAllCards] = useState(false);
  const [showAllNavLinks, setShowAllNavLinks] = useState(false);
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = event => {
     setSearchTerm(event.target.value);
   };

  const handleSearchSubmit = () => {
    const results = allCardsArray.filter(card =>
      card.keyword.toLowerCase() === searchTerm.toLowerCase()
    );
    setCards(results);
  }

  const handleMenuIconClick = () => {
    setShowAllNavLinks(!showAllNavLinks);
  }

  useEffect(() => {
    if (modalIsOpen && windowInnerWidth < 768) {
      setShowAllNavLinks(true);
    } else if (windowInnerWidth >= 768) {
      setShowAllNavLinks(false);
    }
  }, [windowInnerWidth, modalIsOpen])

  const handleResize = () => {
    setWindowInnerWidth(window.innerWidth);
  }

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
      const newCards = cards.map((c) => {
        return c._id === card._id ? card : c;
      });
      savedCards.push(card);
      setCards(newCards);
      setSavedCards(savedCards);
    }
  };

  const handleDeleteClick = (card) => {
    setSavedCards(savedCards.filter((c) => { return c._id !== card._id }));
    card.isSaved = false;
    const newCards = cards.map((c) => {
      return c._id === card._id ? card : c;
    });
    savedCards.push(card);
    setCards(newCards);
  };

  const closeModal = (evt) => {
    if (!evt.key || evt.key === 'Escape') {
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
      <Route exact path='/'>
        <Header
          loggedIn={loggedIn}
          userName={userName}
          isMainPage={true}
          handleSignout={handleSignout}
          handleSigninButtonClick={handleSigninButtonClick}
          handleMenuIconClick={handleMenuIconClick}
          showAllNavLinks={showAllNavLinks}
          handleResize={handleResize}
          windowInnerWidth={windowInnerWidth}
          modalIsOpen={modalIsOpen}
          handleSearchSubmit={handleSearchSubmit}
          handleSearchChange={handleSearchChange}
          searchTerm={searchTerm}
        />
        <Main
          cards={cards}
          loggedIn={loggedIn}
          isLoading={isLoading}
          isMainPage={true}
          onShowMore={handleShowMore}
          showAllCards={showAllCards}
          handleBookmarkClick={handleBookmarkClick}
          handleDeleteClick={handleDeleteClick}
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
        />
      </Route>
      <Route exact path='/saved-news'>
        <Header
          loggedIn={loggedIn}
          userName={userName}
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
        />
        <SavedNews
          cards={savedCards}
          loggedIn={loggedIn}
          isMainPage={false}
          showAllCards={true}
          handleBookmarkClick={handleBookmarkClick}
          handleDeleteClick={handleDeleteClick}
          handleResize={handleResize}
          handleMenuIconClick={handleMenuIconClick}
          showAllNavLinks={showAllNavLinks}
          windowInnerWidth={windowInnerWidth}
        />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
