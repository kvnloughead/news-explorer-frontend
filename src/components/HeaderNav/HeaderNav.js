import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import logoutIcon from '../../images/icons/logout.png';
import logoutDarkIcon from '../../images/icons/logout-dark.png';

function HeaderNav({
  loggedIn,
  userName,
  isMainPage,
  handleSignout,
  handleSigninButtonClick,
  handleMenuIconClick,
  showAllNavLinks,
  handleResize,
  windowInnerWidth
}) {

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  return (
    <>
      {windowInnerWidth > 600 ? (
        <nav className={`header-nav__links`}>
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
          {!loggedIn ? (
            <li>
              <button
                className='header-nav__signin clickable'
                onClick={handleSigninButtonClick}
              >
                Sign in
              </button>
            </li>
          ) : (
            <>
              <li
                class={`header-nav__saved-news clickable ${
                  !isMainPage && 'header-nav__bottom-border_dark'
                }`}
              >
                <Link className='header-nav__saved-news-text header-nav__saved-news-text_light' to='/saved-news'>
                  Saved articles
                </Link>
              </li>
              <li>
                <button
                  className={`header-nav__user-button clickable ${
                    !isMainPage ? 'header-nav__user-button_dark' : ''
                  }`}
                >
                  {userName}
                  <Link to='/' onClick={handleSignout}>
                    <img
                      className='header-nav__logout-icon'
                      src={isMainPage ? logoutIcon : logoutDarkIcon}
                      alt='Logout icon'
                    />
                  </Link>
                </button>
              </li>
            </>
          )}
        </nav>
      ) : (
        <>
          <button
            onClick={handleMenuIconClick}
            className={`header-nav__menu ${
              showAllNavLinks
                ? `header-nav__menu_close`
                : `header-nav__menu_burger`
            }`}
          ></button>
        </>
      )}
    </>
  );
}

export default HeaderNav;
