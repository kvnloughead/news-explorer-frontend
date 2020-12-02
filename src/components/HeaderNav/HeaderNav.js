import React from 'react';
import { Link } from 'react-router-dom';

import logoutIcon from '../../images/icons/logout.png';

function HeaderNav({ handleSignIn, loggedIn, userName }) {
  return (
    <>
      <ul className='header-nav__links'>
        <li className='header-nav__home clickable'>Home</li>
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
            <li>
              <Link
                className='header-nav__saved-news clickable'
                to='/saved-news'
              >
                Saved articles
              </Link>
            </li>
            <li>
              <button className='header-nav__user-button clickable'>
                {userName}
                <img className='header-nav__logout-icon' src={logoutIcon} alt='Logout icon'/>
              </button>
            </li> 
          </>
        )}
      </ul>
    </>
  );
}

export default HeaderNav;
