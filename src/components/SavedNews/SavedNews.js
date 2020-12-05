import NewsCardsList from '../NewsCardsList/NewsCardsList';

function SavedNews({
  cards,
  loggedIn,
  showAllCards,
  handleBookmarkClick,
  handleDeleteClick,
}) {
  return (
    <NewsCardsList
      cards={cards}
      loggedIn={loggedIn}
      showAllCards={showAllCards}
      isMainPage={false}
      handleBookmarkClick={handleBookmarkClick}
      handleDeleteClick={handleDeleteClick}
    />
  );
}

export default SavedNews;
