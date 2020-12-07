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
}) {
  return (
    <div
      class={`header__background ${
        isMainPage ? 'header__background_image' : ''
      } ${showAllNavLinks ? 'header__background_dark' : ''}
      `}
    >
      <div className={`${showAllNavLinks ? 'header__mobile-overlay' : ''}`}>
        <header className={`header`}>
          <Link
            to='/'
            className={`header__title ${
              !showAllNavLinks &&
              !isMainPage &&
              !windowInnerWidth <= 767 &&
              'header__title_dark'
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
            handleResize={handleResize}
            windowInnerWidth={windowInnerWidth}
          />
        </header>
      </div>
      {isMainPage ? (
        <SearchForm showAllNavLinks={showAllNavLinks} />
      ) : (
        <SavedNewsHeader userName={userName} cards={cards} />
      )}
    </div>
  );
}

export default Header;
