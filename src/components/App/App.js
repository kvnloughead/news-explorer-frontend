import { useState } from 'react';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import SavedNews from '../SavedNews/SavedNews.js';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

import { foundCardsArray, savedCardsArray } from '../../temporary/data.js';

function App() {
  const [cards, setCards] = useState(foundCardsArray);
  const [savedCards, setSavedCards] = useState(savedCardsArray);
  const [loggedIn, setLoggedIn] = useState(true);
  const [userName, setUserName] = useState('Kevin');
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const handleSigninButtonClick = () => {
    setIsModalOpen(true);
    setModalType('signin');
  };

  const handleSignupButtonClick = () => {
    setIsModalOpen(true);
    setModalType('signup');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType('');
  };

  const handleSignin = () => {
    setLoggedIn(true);
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
        />
        <Main
          cards={cards}
          loggedIn={loggedIn}
          isLoading={isLoading}
          isMainPage={true}
        />
        <PopupWithForm
          modalType={modalType}
          isModalOpen={isModalOpen}
          onClose={closeModal}
          handleSignupButtonClick={handleSignupButtonClick}
        />
      </Route>
      <Route exact path='/saved-news'>
        <Header
          loggedIn={loggedIn}
          userName={userName}
          isMainPage={false}
          savedCards={savedCards}
          handleSignout={handleSignout}
        />
        <SavedNews cards={savedCards} loggedIn={loggedIn} isMainPage={false} />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
