import React from 'react';
import { Link } from 'react-router-dom';

import logoutIcon from '../../images/icons/logout.png';
import logoutDarkIcon from '../../images/icons/logout-dark.png';

function HeaderNav({
  handleSignIn,
  loggedIn,
  userName,
  isMainPage,
  handleSignout,
}) {
  return (
    <>
      <ul className='header-nav__links'>
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
              onClick={handleSignIn}
              to='/signin'
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
              <Link className='header-nav__saved-news-text' to='/saved-news'>
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
      </ul>
    </>
  );
}

export default HeaderNav;
