import React from 'react';

import HeaderNav from '../HeaderNav/HeaderNav.js';

function HeaderMobileMenu({
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
  return (
    <>
      <div className={`header__mobile-overlay`}>
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
      </div>
    </>
  );
}

export default HeaderMobileMenu;
