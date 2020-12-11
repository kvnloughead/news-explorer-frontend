import { buildKeyWordString } from '../../utils/helpers';

function SavedNewsHeader({ userName, cards }) {
  const keywordString = buildKeyWordString(cards);

  return (
    <section className="saved-news-header">
      <>
        <h2 className="saved-news-header__title">Saved articles</h2>
        <p className="saved-news-header__greeting">
          {userName && userName}
          , you have
          {cards.length}
          {' '}
          saved article
          {cards.length !== 1 ? 's' : ''}
          .
        </p>
        <p className="saved-news-header__keywords">
          {cards.length > 0 && 'By keywords: '}
          {cards.length > 0 && (
          <span className="saved-news-header__keywords saved-news-header__keywords_emphasized">
            {keywordString}
          </span>
          )}
        </p>
      </>
    </section>
  );
}

export default SavedNewsHeader;
