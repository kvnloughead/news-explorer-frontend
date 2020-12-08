import React from 'react';
import { Link } from 'react-router-dom';

function SearchForm({
  showAllNavLinks,
  modalIsOpen,
  handleSearchChange,
  searchTerm,
  handleSearchSubmit
}) {

  return (
    <>
      <section
        className={`search-form ${
          showAllNavLinks ? 'search-form_mobile-menu' : ''
        }`}
      >
        {!showAllNavLinks && (
          <>
            <h2 className='search-form__title'>
              What's going on in the world?
            </h2>
            <p className='search-form__subtitle'>
              Find the latest news on any topic and save them in your personal
              account.
            </p>
          </>
        )}
        {!(showAllNavLinks && modalIsOpen) && (
          <form className={`search-form__form`}>
            <input
              className={`search-form__search-bar`}
              type='search'
              id='search'
              name='search'
              aria-label='Search for news articles'
              placeholder='Enter topic'
              onChange={handleSearchChange}
              value={searchTerm}
            ></input>
            <button type='submit' onClick={handleSearchSubmit} className='search-form__search-button clickable'>
              Search
            </button>
          </form>
        )}
      </section>
    </>
  );
}

export default SearchForm;
