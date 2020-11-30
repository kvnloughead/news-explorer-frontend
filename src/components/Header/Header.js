import React from 'react';
import HeaderLink from '../HeaderLink/HeaderLink.js';

function Header({ userEmail, loggedIn, handleSignOut }) {
  return (
    <>
    <header className="header">
      <h1 className='header__title'>NewsExplorer</h1>
      <HeaderLink loggedIn={loggedIn} userEmail={userEmail} handleSignOut={handleSignOut}/>
    </header>
    </>
  )
}

export default Header