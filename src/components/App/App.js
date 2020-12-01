import { useState } from 'react';

import './App.css';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';

import { initialCards } from '../../temporary/data.js';


function App() {

  const [cards, setCards] = useState(initialCards);

  return (
    <div>
      <Header />
      <Main cards={cards}/>
    </div>
  );
}

export default App;
