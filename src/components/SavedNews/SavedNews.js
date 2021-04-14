import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import NewsCardsList from '../NewsCardsList/NewsCardsList';

function SavedNews({
  cards,
  loggedIn,
  onShowMore,
  numCardsShown,
  setNumCardsShown,
  handleSigninButtonClick,
  handleBookmarkClick,
  handleDeleteClick,
}) {
  const history = useHistory();
  // useEffect(() => {
  //   if (!loggedIn) {
  //     history.push('/');
  //     handleSigninButtonClick();
  //   }
  // });

  return (
    <NewsCardsList
      cards={cards}
      loggedIn={loggedIn}
      onShowMore={onShowMore}
      numCardsShown={numCardsShown}
      setNumCardsShown={setNumCardsShown}
      isMainPage={false}
      handleBookmarkClick={handleBookmarkClick}
      handleDeleteClick={handleDeleteClick}
    />
  );
}

export default SavedNews;
