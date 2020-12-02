import React from 'react';

function NewsCard({ card, loggedIn, index }) {
  return (
    <>
      {card && (
        <li className='card'>
          <button
            className={`card__signin-button${
              !loggedIn && index === 2 ? ' card__signin-button_visible' : ''
            }`}
          >
            Sign in to save articles
          </button>
          <button className='card__save-button'></button>
          <img className='card__image' src={card.image} alt={card.title} />
          <p className='card__date'>{card.date}</p>
          <h3 className='card__title'>{card.title}</h3>
          <p className='card__text'>{card.text}</p>
          <cite className='card__source'>{card.source}</cite>
        </li>
      )}
    </>
  );
}

export default NewsCard;
