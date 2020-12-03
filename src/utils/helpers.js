const rankKeywords = (cards) => {
  let counts = {};
  cards.forEach((card) => {
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
module.exports.buildKeyWordString = (cards) => {
  const words = rankKeywords(cards);
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