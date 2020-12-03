import React from 'react';

function NewsCard({ card, loggedIn, index, isSaved }) {
  return (
    <>
      {card && (
        <li className='card clickable'>
          <p className='card__keyword'>
            {card.keyword[0].toUpperCase() + card.keyword.slice(1)}
          </p>
          <button
            className={`card__signin-button clickable${
              !loggedIn && index === 2 ? ' card__signin-button_visible' : ''
            }`}
          >
            Sign in to save articles
          </button>
          <button
            className={`card__save-button clickable ${
              isSaved && ' card__save-button_saved'
            }`}
          ></button>
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
