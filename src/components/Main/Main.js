import React from "react";

import SearchForm from '../SearchForm/SearchForm.js';
import SearchResults from '../SearchResults/SearchResults.js';

function Main({ cards }) {
  return (
    <main>
      <SearchForm />
      <SearchResults cards={cards}/>
    </main>
  );
}

export default Main;