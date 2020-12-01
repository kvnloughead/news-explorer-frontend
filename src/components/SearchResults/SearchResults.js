import React from "react";

import NewsCard from '../NewsCard/NewsCard.js';

function SearchResults({ cards }) {
  debugger;
  return (
    <section className='search-results'>
      <h2 className='search-results__title'>Search Results</h2>
      <ul className="search-results__list">
        {cards && cards.slice(0,3).map((card) => (
          <NewsCard
            key={card._id}
            card={card}
          />
        ))}
      </ul>
      <button className='search-results__button'>Show more</button>
    </section>
  );
}

export default SearchResults;