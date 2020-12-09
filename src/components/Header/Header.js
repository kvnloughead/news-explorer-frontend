import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav.js';
import SearchForm from '../SearchForm/SearchForm.js';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.js';

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
  searchTerm,
  handleSearchSubmit,
  setShowAllNavLinks,
}) {
  return (
    <div
      class={`header__background ${isMainPage ? 'header__background_image' : ''}
      `}
    >
        <header className={`header`}>
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
          searchTerm={searchTerm}
          handleSearchSubmit={handleSearchSubmit}
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
