import React from 'react';

function NewsCard({
  card,
  isMainPage,
  loggedIn,
  handleBookmarkClick,
  handleDeleteClick,
}) {
  return (
    <>
      {card && (
        <li className='card clickable'>
          {!isMainPage && (
            <p className='card__keyword'>
              {card.keyword[0].toUpperCase() + card.keyword.slice(1)}
            </p>
          )}
          {isMainPage ? (
            <button
              onClick={() => {
                handleBookmarkClick(card);
              }}
              className={`card__button clickable ${
                card.isSaved
                  ? ' card__button_type_bookmark-saved'
                  : ' card__button_type_bookmark'
              }`}
            ></button>
          ) : (
            <button
              onClick={() => {
                handleDeleteClick(card);
              }}
              className={`card__button clickable ${
                card.isSaved ? ' card__button_type_delete' : ''
              }`}
            ></button>
          )}
          {(!isMainPage || !loggedIn) && (
            <button className={`card__tooltip clickable`}>
              {!loggedIn ? 'Sign in to save articles' : 'Remove from saved'}
            </button>
          )}
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
