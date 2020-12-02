import React from "react";

import SearchForm from '../SearchForm/SearchForm.js';
import SearchResults from '../SearchResults/SearchResults.js';
import About from '../About/About.js';

function Main({ cards, loggedIn }) {
  return (
    <main>
      <SearchForm />
      <SearchResults cards={cards} loggedIn={loggedIn}/>
      <About />
    </main>
  );
}

export default Main;