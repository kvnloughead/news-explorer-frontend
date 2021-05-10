import React from 'react';
import ErrorContext from '../../contexts/ErrorContext';

import NewsCard from '../NewsCard/NewsCard';
import CardsListError from '../CardsListError/CardsListError';

function NewsCardsList({
  cards,
  loggedIn,
  isSaved,
  isLoading,
  isMainPage,
  showAllCards,
  onShowMore,
  handleDeleteClick,
  handleBookmarkClick,
  handleSigninButtonClick,
  numCardsShown,
  setNumCardsShown,
  notFound,
  noSearch,
}) {
  const error = React.useContext(ErrorContext);

  return (
    <section className="news-cards-list">
      {isLoading === 'search' ? (
        <div className="circle-preloader">
          <i className="circle-preloader__circle" />
          <p className="circle-preloader__text">Searching for news...</p>
        </div>
      ) : (
        <>
          {cards.length > 0 ? (
            <div className="news-cards-list__container">
              {isMainPage && (
                <h2 className="news-cards-list__title">Search Results</h2>
              )}
              <ul className="news-cards-list__list">
                {cards
                  && cards
                    .slice(0, showAllCards ? cards.length : Math.min(numCardsShown, cards.length))
                    .map((card) => (
                      <NewsCard
                        handleSigninButtonClick={handleSigninButtonClick}
                        handleBookmarkClick={handleBookmarkClick}
                        handleDeleteClick={handleDeleteClick}
                        isMainPage={isMainPage}
                        loggedIn={loggedIn}
                        isSaved={isSaved}
                        key={card._id ? card._id : cards.indexOf(card)}
                        card={card}
                      />
                    ))}
              </ul>
              {numCardsShown < cards.length && (
                <button
                  type="button"
                  aria-label="show-all-cards"
                  className="news-cards-list__button clickable"
                  onClick={onShowMore.bind(this, numCardsShown, setNumCardsShown)}
                >
                  Show more
                </button>
              )}
            </div>
          ) : (
            <>
              {!isMainPage && <CardsListError type="noCards" />}
              {(isMainPage && noSearch) && <CardsListError type="noSearch" />}
              {notFound && <CardsListError type="notFound" />}
              {error.type.length > 0 && <CardsListError type="searchError" />}
            </>
          )}
        </>
      )}
    </section>
  );
}

export default NewsCardsList;
