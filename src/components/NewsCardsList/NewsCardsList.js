import React, { useEffect } from 'react';

import NewsCard from '../NewsCard/NewsCard.js';

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
  notFound
}) {
  return (
    <section className='news-cards-list'>
      {isLoading ? (
        <div className='circle-preloader'>
          <i className='circle-preloader__circle'></i>
          <p className='circle-preloader__text'>Searching for news...</p>
        </div>
      ) : (
        <>
          {cards.length > 0 ? (
            <div className='news-cards-list__container'>
              {isMainPage && (
                <h2 className='news-cards-list__title'>Search Results</h2>
              )}
              <ul className='news-cards-list__list'>
                {cards &&
                  cards
                    .slice(0, 3)
                    .map((card, i) => (
                      <NewsCard
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
              {!showAllCards ? (
                <button
                  className='news-cards-list__button clickable'
                  onClick={onShowMore}
                >
                  Show more
                </button>
              ) : (
                <ul className='news-cards-list__list'>
                  {cards &&
                    cards
                      .slice(3)
                      .map((card, i) => (
                        <NewsCard
                          handleBookmarkClick={handleBookmarkClick}
                          handleDeleteClick={handleDeleteClick}
                          loggedIn={loggedIn}
                          isSaved={isSaved}
                          isMainPage={isMainPage}
                          key={card._id}
                          card={card}
                        />
                      ))}
                </ul>
              )}
            </div>
          ) : (
            <>
              {notFound && (
                <div className='not-found'>
                  <div className='not-found__icon'></div>
                  <h3 className='not-found__title'>
                    {isMainPage ? 'Nothing found' : 'Nothing here'}
                  </h3>
                  <p className='not-found__text'>
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
