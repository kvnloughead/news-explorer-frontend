import React from "react";

import SearchForm from '../SearchForm/SearchForm.js';
import SearchResults from '../SearchResults/SearchResults.js';
import About from '../About/About.js';

function Main({ cards }) {
  return (
    <main>
      <SearchForm />
      <SearchResults cards={cards}/>
      <About />
    </main>
  );
}

export default Main;