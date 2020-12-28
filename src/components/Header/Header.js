import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';
import SearchForm from '../SearchForm/SearchForm';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Header({
  cards,
  loggedIn,
  userName,
  isMainPage,
  handleSignout,
  handleSigninButtonClick,
  handleMenuIconClick,
  showAllNavLinks,
  handleResize,
  windowInnerWidth,
  modalIsOpen,
  handleSearchChange,
  handleSearchSubmit,
  setShowAllNavLinks,
  searchTerm,
  searchError,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <div
      className={`header__background ${isMainPage ? 'header__background_image' : ''}
      `}
    >
      <header className="header">
        <HeaderNav
          loggedIn={loggedIn}
          userName={userName}
          isMainPage={isMainPage}
          handleSignout={handleSignout}
          handleSigninButtonClick={handleSigninButtonClick}
          handleMenuIconClick={handleMenuIconClick}
          showAllNavLinks={showAllNavLinks}
          setShowAllNavLinks={setShowAllNavLinks}
          handleResize={handleResize}
          windowInnerWidth={windowInnerWidth}
          modalIsOpen={modalIsOpen}
        />
      </header>
      {isMainPage ? (
        <SearchForm
          modalIsOpen={modalIsOpen}
          windowInnerWidth={windowInnerWidth}
          showAllNavLinks={showAllNavLinks}
          handleSearchChange={handleSearchChange}
          handleSearchSubmit={handleSearchSubmit}
          searchTerm={searchTerm}
          searchError={searchError}
        />
      ) : (
        <SavedNewsHeader
          userName={userName}
          cards={cards}
          showAllNavLinks={showAllNavLinks}
        />
      )}
    </div>
  );
}

export default Header;
