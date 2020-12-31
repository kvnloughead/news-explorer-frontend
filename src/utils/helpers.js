const months = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

const articleProperties = ['keyword', 'title', 'description', 'publishedAt', 'source', 'url', 'urlToImage'];

// eslint-disable-next-line arrow-body-style
const areSameArticle = (article, savedArticle) => {
  return articleProperties.every((key) => article[key] === savedArticle[key]);
};

module.exports.convertDate = (dateString) => {
  const [year, month] = dateString.split('-');
  const [day] = dateString.split('-')[2].split('T');
  return `${months[month - 1]} ${day}, ${year}`;
};

// eslint-disable-next-line arrow-body-style
module.exports.articleIsSaved = (article, savedArticles) => {
  let isSaved = false;
  let id;
  savedArticles.forEach((a) => {
    if (areSameArticle(article, a)) {
      isSaved = true;
      id = a._id;
    }
  });
  return [isSaved, id];
};

const rankKeywords = (cards) => {
  const counts = {};
  cards.forEach((card) => {
    counts[card.keyword] = counts[card.keyword]
      ? counts[card.keyword] + 1
      : 1;
  });
  let keywordsSorted = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
  keywordsSorted = keywordsSorted.map(
    (word) => word[0].toUpperCase() + word.slice(1),
  );
  return keywordsSorted;
};

module.exports.buildKeyWordString = (cards) => {
  const words = rankKeywords(cards);
  let keywordString;
  if (words.length === 1) {
    [keywordString] = words;
  } else if (words.length === 2) {
    keywordString = `${words[0]} and ${words[1]}`;
  } else if (words.length === 3) {
    keywordString = `${words[0]}, ${words[1]} and ${words[2]}`;
  } else {
    keywordString = `${words[0]}, ${words[1]} and ${words.length - 2} other${
      words.length - 2 !== 1 ? 's' : ''
    }`;
  }
  return keywordString;
};
