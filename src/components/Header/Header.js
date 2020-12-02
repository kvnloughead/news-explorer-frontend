import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav.js'

function Header({ loggedIn, userName }) {
  return (
    <>
    <header className='header'>
      <h1 className='header__title'>NewsExplorer</h1>
      <HeaderNav loggedIn={loggedIn} userName={userName}/>
    </header>
    </>
  )
}

export default Header