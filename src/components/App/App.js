import { useState } from 'react';

import './App.css';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';

import { initialCards } from '../../temporary/data.js';


function App() {

  const [cards, setCards] = useState(initialCards);
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div>
      <Header loggedIn={loggedIn}/>
      <Main cards={cards} loggedIn={loggedIn}/>
      <Footer />
    </div>
  );
}

export default App;
