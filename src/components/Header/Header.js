import React from 'react';
import { Link } from 'react-router-dom';
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
      <div
        className={`${
          showAllNavLinks && windowInnerWidth < 768
            ? 'header__mobile-overlay'
            : ''
        }`}
      >
        <header className={`header`}>
          <Link
            to='/'
            className={`header__title ${
              !showAllNavLinks && !isMainPage && !windowInnerWidth < 768
                ? 'header__title_dark'
                : ''
            }`}
          >
            NewsExplorer
          </Link>
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
      </div>
      {isMainPage ? (
        <SearchForm
          modalIsOpen={modalIsOpen}
          windowInnerWidth={windowInnerWidth}
          showAllNavLinks={showAllNavLinks}
          handleSearchChange={handleSearchChange}
          searchTerm={searchTerm}
          handleSearchSubmit={handleSearchSubmit}
          handleSearchChange={handleSearchChange}
          searchTerm={searchTerm}
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
