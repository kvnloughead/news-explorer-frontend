import NewsCardsList from '../NewsCardsList/NewsCardsList';

function SavedNews({ cards, loggedIn, showAllCards }) {
  return (
    <NewsCardsList
      cards={cards}
      loggedIn={loggedIn}
      showAllCards={showAllCards}
    />
  );
}

export default SavedNews;
