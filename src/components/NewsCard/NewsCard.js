import React from 'react';

import { convertDate } from '../../utils/helpers';

function NewsCard({
  card,
  isMainPage,
  loggedIn,
  handleSigninButtonClick,
  handleBookmarkClick,
  handleDeleteClick,
}) {
  return (
    <>
      {card && (
        <li className="card">
          {!isMainPage && (
            <p className="card__keyword">
              {card.keyword[0].toUpperCase() + card.keyword.slice(1)}
            </p>
          )}
          {isMainPage ? (
            <button
              type="button"
              aria-label="save-article"
              onClick={loggedIn ? handleBookmarkClick.bind(this, card) : handleSigninButtonClick}
              className={`card__button ${loggedIn ? 'clickable' : ''}${
                card.isSaved
                  ? ' card__button_type_bookmark-saved'
                  : ' card__button_type_bookmark'
              }`}
            />
          ) : (
            <button
              type="button"
              aria-label="delete-article"
              onClick={handleDeleteClick.bind(this, card)}
              className="card__button clickable card__button_type_delete"
            />
          )}
          {(!isMainPage || !loggedIn) && (
            <div
              type="button"
              className="card__tooltip clickable"
              // className={`card__tooltip clickable ${deleteError ? 'card__tooltip_visible' : ''}`}
            >
              <p>
                {!loggedIn ? 'Sign in to save articles' : 'Remove from saved'}
              </p>
            </div>
          )}
          <img className="card__image" src={card.urlToImage} alt={card.title} />
          <p className="card__date">{convertDate(card.publishedAt)}</p>
          <h3 className="card__title">{card.title}</h3>
          <p className="card__text">{card.description}</p>
          <a href={card.url} className="card__source clickable">{card.source}</a>
        </li>
      )}
    </>
  );
}

export default NewsCard;
