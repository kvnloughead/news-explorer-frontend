import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav.js'

function Header({ loggedIn }) {
  return (
    <>
    <header className='header'>
      <h1 className='header__title'>NewsExplorer</h1>
      <HeaderNav loggedIn={loggedIn} />
    </header>
    </>
  )
}

export default Header