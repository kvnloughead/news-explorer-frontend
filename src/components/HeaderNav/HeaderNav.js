import React, { useEffect } from 'react';
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
  setShowAllNavLinks,
  handleResize,
  windowInnerWidth,
  modalIsOpen,
}) {
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  return (
    <>
      <nav
        className={`header-nav__links ${
          showAllNavLinks && windowInnerWidth < 768
            ? 'header-nav__links_mobile'
            : ''
        }`}
      >
        <Link
          to="/"
          className={`header-nav__title ${
            !showAllNavLinks && !isMainPage && !windowInnerWidth < 768
              ? 'header-nav__title_dark'
              : ''
          }`}
        >
          NewsExplorer
        </Link>
        {windowInnerWidth < 768 && (
          <button
            type="button"
            aria-label="show-header-links-menu"
            onClick={handleMenuIconClick}
            className={`header-nav__menu ${
              showAllNavLinks || modalIsOpen
                ? 'header-nav__menu_type_close'
                : `header-nav__menu_type_burger${isMainPage ? '' : '-dark'}`
            }`}
          />
        )}
        {(windowInnerWidth >= 768 || showAllNavLinks) && (
          <ul
            className={`header-nav__links-container ${
              showAllNavLinks ? 'header-nav__links-container_mobile' : ''
            }`}
          >
            <li
              className={`header-nav__home clickable ${
                isMainPage && 'header-nav__bottom-border'
              }`}
            >
              <Link
                onClick={() => {
                  setShowAllNavLinks(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setShowAllNavLinks(false);
                  }
                }}
                className={`header-nav__home-text ${
                  !isMainPage && !showAllNavLinks
                    ? 'header-nav__home-text_dark'
                    : ''
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            {(loggedIn || showAllNavLinks) && (
              <li
                className={`header-nav__saved-news clickable ${
                  !isMainPage && 'header-nav__bottom-border_dark'
                }`}
              >
                <Link
                  onClick={() => {
                    setShowAllNavLinks(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setShowAllNavLinks(false);
                    }
                  }}
                  className={`header-nav__saved-news-text ${
                    isMainPage || showAllNavLinks
                      ? 'header-nav__saved-news-text_light'
                      : ''
                  }`}
                  to="/saved-news"
                >
                  Saved articles
                </Link>
              </li>
            )}

            {!loggedIn ? (
              <li className="header-nav__signin-container">
                <button
                  type="button"
                  className="header-nav__signin clickable"
                  onClick={handleSigninButtonClick}
                >
                  Sign in
                </button>
              </li>
            ) : (
              <li className="header-nav__user-button-container">
                <button
                  type="button"
                  className={`header-nav__user-button clickable ${
                    !isMainPage && !showAllNavLinks
                      ? 'header-nav__user-button_dark'
                      : ''
                  }`}
                >
                  {userName}
                  <Link to="/" onClick={handleSignout}>
                    <img
                      className="header-nav__logout-icon"
                      src={
                        isMainPage || showAllNavLinks
                          ? logoutIcon
                          : logoutDarkIcon
                      }
                      alt="Logout icon"
                    />
                  </Link>
                </button>
              </li>
            )}
          </ul>
        )}
      </nav>
    </>
  );
}

export default HeaderNav;
