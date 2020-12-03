import NewsCardsList from '../NewsCardsList/NewsCardsList';

function SavedNews({ cards, loggedIn }) {
  return (
    <NewsCardsList
      cards={cards}
      loggedIn={loggedIn}
    />
  );
}

export default SavedNews;
