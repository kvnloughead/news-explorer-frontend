import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
} from 'react-router-dom';

import './App.css';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import SavedNews from '../SavedNews/SavedNews.js';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.js';

import { initialCards } from '../../temporary/data.js';

function App() {
  const [cards, setCards] = useState(initialCards);
  const [loggedIn, setLoggedIn] = useState(true);
  const [userName, setUserName] = useState('Kevin');
  const [isSaved, setIsSaved] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  return (
    <Router>
      <Route exact path='/'>
        <Header loggedIn={loggedIn} userName={userName} isMainPage={true}/>
        <Main
          cards={cards}
          loggedIn={loggedIn}
          isSaved={isSaved}
          isLoading={isLoading}
        />
      </Route>
      <Route exact path='/saved-news'>
        <Header loggedIn={loggedIn} userName={userName} isMainPage={false}/>
        <SavedNews />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
