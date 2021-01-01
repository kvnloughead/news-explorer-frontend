import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import NewsCardsList from '../NewsCardsList/NewsCardsList';

function SavedNews({
  cards,
  loggedIn,
  showAllCards,
  handleSigninButtonClick,
  handleBookmarkClick,
  handleDeleteClick,
}) {
  const history = useHistory();
  useEffect(() => {
    if (!loggedIn) {
      history.push('/');
      handleSigninButtonClick();
    }
  });

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
