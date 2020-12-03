import React from 'react';

// import SearchForm from '../SearchForm/SearchForm.js';
import NewsCardsList from '../NewsCardsList/NewsCardsList.js';
import About from '../About/About.js';

function Main({ cards, loggedIn, isSaved, isLoading }) {
  return (
    <main >
      <NewsCardsList
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
