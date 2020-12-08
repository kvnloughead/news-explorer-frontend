import React from 'react';

import SearchForm from '../SearchForm/SearchForm.js';
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
  notFound,
}) {
  return (
    <>
      <main>
        {(cards.length > 0 || notFound) && (
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
            notFound={notFound}
          />
        )}
        <About />
      </main>
    </>
  );
}

export default Main;
