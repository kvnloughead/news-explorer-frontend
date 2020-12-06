import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from '../HeaderNav/HeaderNav.js';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.js';
import SearchForm from '../SearchForm/SearchForm.js';

function Header({
  loggedIn,
  userName,
  isMainPage,
  cards,
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
      }`}
    >
      <header className={`header`}>
        <Link
          to='/'
          className={`header__title ${
            !isMainPage && !windowInnerWidth <= 600 && 'header__title_dark'
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
      {showAllNavLinks && windowInnerWidth <= 600 && (
        <nav class={`header__mobile-links`}>
          <li
            class={`header-nav__home clickable ${
              isMainPage && 'header-nav__bottom-border'
            }`}
          >
            <Link
              class={`header-nav__home-text ${
                !isMainPage ? 'header-nav__home-text_dark' : ''
              }`}
              to='/'
            >
              Home
            </Link>
          </li>
          <li
            class={`header-nav__saved-news clickable ${
              !isMainPage && 'header-nav__bottom-border_dark'
            }`}
          >
            <Link className='header-nav__saved-news-text' to='/saved-news'>
              Saved articles
            </Link>
          </li>
          <button
            className='header-nav__signin clickable'
            onClick={handleSigninButtonClick}
          >
            Sign in
          </button>
        </nav>
      )}
      {isMainPage ? (
        <SearchForm />
      ) : (
        <SavedNewsHeader
          userName={userName}
          cards={cards}
          handleSignout={handleSignout}
        />
      )}
    </div>
  );
}

export default Header;
