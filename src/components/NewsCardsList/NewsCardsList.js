import React from 'react';

import NewsCard from '../NewsCard/NewsCard';

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
}) {
  return (
    <section className="news-cards-list">
      {isLoading ? (
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
                        key={card._id}
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
              {notFound && (
                <div className="not-found">
                  <div className="not-found__icon" />
                  <h3 className="not-found__title">
                    {isMainPage ? 'Nothing found' : 'Nothing here'}
                  </h3>
                  <p className="not-found__text">
                    {isMainPage
                      ? 'Sorry, but nothing matched your search terms.'
                      : 'Go save some articles!'}
                  </p>
                </div>
              )}
            </>
          )}
        </>
      )}
    </section>
  );
}

export default NewsCardsList;
