import React from 'react';

import ErrorContext from '../../contexts/ErrorContext';
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
  noSearch,
}) {
  const error = React.useContext(ErrorContext);

  return (
    <>
      <main>
        {(cards.length > 0 || notFound || isLoading || error.type.length > 0 || noSearch) && (
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
            noSearch={noSearch}
          />
        )}
        <About />
      </main>
    </>
  );
}

export default Main;
