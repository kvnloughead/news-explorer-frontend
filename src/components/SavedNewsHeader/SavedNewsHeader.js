function SavedNewsHeader({ userName, savedCards }) {
  function rankKeywords() {
    let counts = {};
    savedCards.forEach((card) => {
      counts[card.keyword] = counts[card.keyword]
        ? counts[card.keyword] + 1
        : 1;
    });
    let keywordsSorted = Object.keys(counts).sort(function (a, b) {
      return counts[b] - counts[a];
    });
    keywordsSorted = keywordsSorted.map(
      (word) => word[0].toUpperCase() + word.slice(1)
    );
    return keywordsSorted;
  }

  function buildKeyWordString() {
    const words = rankKeywords();
    const keywordString =
      words.length === 1
        ? words[0]
        : words.length === 2
        ? `${words[0]} and ${words[1]}`
        : `${words[0]}, ${words[1]} and ${words.length - 2} other${
            words.length - 2 !== 1 ? 's' : ''
          }`;
    return keywordString;
  }
  
  const keywordString = buildKeyWordString();

  return (
    <section className='saved-news-header'>
      <h2 className='saved-news-header__title'>Saved articles</h2>
      <p className='saved-news-header__greeting'>
        {userName && userName}, you have {savedCards.length} saved article
        {savedCards.length !== 1 ? 's' : ''}.
      </p>
      <p className='saved-news-header'>By keywords: <span class='saved-news-emphasized'>{keywordString}</span></p>
    </section>
  );
}

export default SavedNewsHeader;
