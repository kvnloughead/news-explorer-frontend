import React from 'react';

import NewsCard from '../NewsCard/NewsCard.js';

function NewsCardsList({ cards, loggedIn, isSaved, isLoading }) {
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
            <>
              <h2 className='news-cards-list__title'>Search Results</h2>
              <ul className='news-cards-list__list'>
                {cards &&
                  cards
                    .slice(0, 3)
                    .map((card, i) => (
                      <NewsCard
                        loggedIn={loggedIn}
                        isSaved={isSaved}
                        key={card._id}
                        card={card}
                        index={i}
                      />
                    ))}
              </ul>
              <button className='news-cards-list__button'>Show more</button>
            </>
          ) : (
            <div class='not-found'>
              <div className='not-found__icon'></div>
              <h3 className='not-found__title'>Nothing found</h3>
              <p className='not-found__text'>
                Sorry, but nothing matched your search terms.
              </p>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default NewsCardsList;
