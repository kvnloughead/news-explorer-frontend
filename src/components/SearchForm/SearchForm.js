import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchForm({
  showAllNavLinks,
  modalIsOpen,
  handleSearchChange,
  searchTerm,
  handleSearchSubmit
}) {

  // const [searchTerm, setSearchTerm] = useState('');
  // const handleSearchChange = event => {
  //   setSearchTerm(event.target.value);
  // };

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
            <Link onClick={handleSearchSubmit} className='search-form__search-button clickable'>
              Search
            </Link>
          </form>
        )}
      </section>
    </>
  );
}

export default SearchForm;
