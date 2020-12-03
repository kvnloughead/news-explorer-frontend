import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from '../HeaderNav/HeaderNav.js'
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.js';
import SearchForm from '../SearchForm/SearchForm.js';


function Header({ loggedIn, userName, isMainPage, savedCards, handleSignout }) {
  return (
    <div class={`header__background ${isMainPage ? 'header__background_image' : ''}`}>
    <header className={`header`}>
      <Link to='/' className={`header__title ${!isMainPage && 'header__title_dark'}`}>NewsExplorer</Link>
      <HeaderNav loggedIn={loggedIn} userName={userName} isMainPage={isMainPage} handleSignout={handleSignout}/>
    </header>
    {isMainPage ? (
      <SearchForm />  
    ) : (
      <SavedNewsHeader userName={userName} savedCards={savedCards} handleSignout={handleSignout}/>
    )}
    </div>
    
  )
}

export default Header