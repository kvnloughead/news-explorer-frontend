import React from "react";

function Main(props) {
  return (
  <main className='search-form'>
    <h2 className='search-form__title'>What's going on in the world?</h2>
    <p className='search-form__subtitle'>Find the latest news on any topic and save them in your personal account.</p>
    <form className='search-form__form'>
      <input className='search-form__search-bar' type='search' id='search' name='search' aria-label="Search through site content"></input>
      <button className='search-form__search-button'>Search</button> 
    </form>
  </main>
  );
}

export default Main;