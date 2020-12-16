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
        <li className="card clickable">
          {!isMainPage && (
            <p className="card__keyword">
              {card.keyword[0].toUpperCase() + card.keyword.slice(1)}
            </p>
          )}
          {isMainPage ? (
            <button
              type="button"
              aria-label="save-article"
              onClick={() => {
                handleBookmarkClick(card);
              }}
              className={`card__button clickable ${
                card.isSaved
                  ? ' card__button_type_bookmark-saved'
                  : ' card__button_type_bookmark'
              }`}
            />
          ) : (
            <button
              type="button"
              aria-label="delete-article"
              onClick={() => {
                handleDeleteClick(card);
              }}
              className={`card__button clickable ${
                card.isSaved ? ' card__button_type_delete' : ''
              }`}
            />
          )}
          {(!isMainPage || !loggedIn) && (
            <div
              type="button"
              className="card__tooltip clickable"
            >
              <p>
                {!loggedIn ? 'Sign in to save articles' : 'Remove from saved'}
              </p>
            </div>
          )}
          <img className="card__image" src={card.urlToImage} alt={card.title} />
          <p className="card__date">{card.publishedAt}</p>
          <h3 className="card__title">{card.title}</h3>
          <p className="card__text">{card.description}</p>
          <cite className="card__source">{card.source.name}</cite>
        </li>
      )}
    </>
  );
}

export default NewsCard;
