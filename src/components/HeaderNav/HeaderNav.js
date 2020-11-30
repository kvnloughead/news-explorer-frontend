import React from 'react';

function HeaderNav({ handleSignIn }) {
  return (
    <>
      <ul className='header-nav__links'>
        <li className='header-nav__home'>Home</li>
        <li>
          <button className='header-nav__signin' onClick={handleSignIn} to='/signin'>
            Sign in
          </button>
        </li>
      </ul>
    </>
  );
}

export default HeaderNav;