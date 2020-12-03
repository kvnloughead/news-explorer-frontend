import { useState } from 'react';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import SavedNews from '../SavedNews/SavedNews.js';

import { initialCards } from '../../temporary/data.js';

function App() {
  const [cards, setCards] = useState(initialCards);
  const [savedCards, setSavedCards] = useState(initialCards);
  const [loggedIn, setLoggedIn] = useState(true);
  const [userName, setUserName] = useState('Kevin');
  const [isSaved, setIsSaved] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

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
        />
        <Main
          cards={cards}
          loggedIn={loggedIn}
          isSaved={isSaved}
          isLoading={isLoading}
          isMainPage={true}
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
