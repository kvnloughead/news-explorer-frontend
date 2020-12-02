import { useState } from 'react';

import './App.css';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';

import { initialCards } from '../../temporary/data.js';

function App() {
  const [cards, setCards] = useState(initialCards);
  const [loggedIn, setLoggedIn] = useState(true);
  const [userName, setUserName] = useState('Kevin');
  const [isSaved, setIsSaved] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <Header loggedIn={loggedIn} userName={userName} />
      <Main
        cards={cards}
        loggedIn={loggedIn}
        isSaved={isSaved}
        isLoading={isLoading}
      />
      <Footer />
    </div>
  );
}

export default App;
