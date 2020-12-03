import { buildKeyWordString } from '../../utils/helpers.js';

function SavedNewsHeader({ userName, savedCards }) {
  const keywordString = buildKeyWordString(savedCards);

  return (
    <section className='saved-news-header'>
      <h2 className='saved-news-header__title'>Saved articles</h2>
      <p className='saved-news-header__greeting'>
        {userName && userName}, you have {savedCards.length} saved article
        {savedCards.length !== 1 ? 's' : ''}.
      </p>
      <p className='saved-news-header'>
        By keywords: <span class='saved-news-emphasized'>{keywordString}</span>
      </p>
    </section>
  );
}

export default SavedNewsHeader;
