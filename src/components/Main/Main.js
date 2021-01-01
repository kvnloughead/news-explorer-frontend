import React from 'react';

import NewsCardsList from '../NewsCardsList/NewsCardsList';
import About from '../About/About';

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
  numCardsShown,
  notFound,
  handleSigninButtonClick,
  setNumCardsShown
}) {
  return (
    <>
      <main>
        {(cards.length > 0 || notFound || isLoading) && (
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
          />
        )}
        <About />
      </main>
    </>
  );
}

export default Main;
