import React from 'react';

import NewsCardsList from '../NewsCardsList/NewsCardsList';
import About from '../About/About';

function Main({
  cards,
  loggedIn,
  isSaved,
  isLoading,
  isMainPage,
  onShowMore,
  handleBookmarkClick,
  handleDeleteClick,
  numCardsShown,
  notFound,
  handleSigninButtonClick,
  setNumCardsShown,
  searchError,
}) {
  return (
    <>
      <main>
        {(cards.length > 0 || notFound || isLoading || searchError.length > 0) && (
          <NewsCardsList
            cards={cards}
            loggedIn={loggedIn}
            isSaved={isSaved}
            isLoading={isLoading}
            isMainPage={isMainPage}
            onShowMore={onShowMore}
            handleSigninButtonClick={handleSigninButtonClick}
            handleBookmarkClick={handleBookmarkClick}
            handleDeleteClick={handleDeleteClick}
            numCardsShown={numCardsShown}
            setNumCardsShown={setNumCardsShown}
            notFound={notFound}
            searchError={searchError}
          />
        )}
        <About />
      </main>
    </>
  );
}

export default Main;
