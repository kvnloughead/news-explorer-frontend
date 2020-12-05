import React from 'react';

// import SearchForm from '../SearchForm/SearchForm.js';
import NewsCardsList from '../NewsCardsList/NewsCardsList.js';
import About from '../About/About.js';

function Main({
  cards,
  loggedIn,
  isSaved,
  isLoading,
  isMainPage,
  showAllCards,
  onShowMore,
  handleBookmarkClick,
  handleDeleteClick,
}) {
  return (
    <main>
      <NewsCardsList
        cards={cards}
        loggedIn={loggedIn}
        isSaved={isSaved}
        isLoading={isLoading}
        isMainPage={isMainPage}
        showAllCards={showAllCards}
        onShowMore={onShowMore}
        handleBookmarkClick={handleBookmarkClick}
        handleDeleteClick={handleDeleteClick}
      />
      <About />
    </main>
  );
}

export default Main;
