import React from "react";

import NewsCard from '../NewsCard/NewsCard.js';

function SearchResults({ cards }) {
  debugger;
  return (
    <section className='search-results'>
      <h2 className='search-results__title'>Search Results</h2>
      <ul className="search-results__list">
        {cards && cards.map((card) => (
          <NewsCard
            key={card._id}
            card={card}
          />
        ))}
        <NewsCard />
      </ul>
    </section>
  );
}

export default SearchResults;