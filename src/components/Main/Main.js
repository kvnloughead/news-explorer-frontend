import React from 'react';

// import SearchForm from '../SearchForm/SearchForm.js';
import SearchResults from '../SearchResults/SearchResults.js';
import About from '../About/About.js';

function Main({ cards, loggedIn, isSaved, isLoading }) {
  return (
    <main >
      <SearchResults
        cards={cards}
        loggedIn={loggedIn}
        isSaved={isSaved}
        isLoading={isLoading}
      />
      <About />
    </main>
  );
}

export default Main;
