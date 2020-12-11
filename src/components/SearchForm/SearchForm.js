import React from 'react';

function SearchForm({
  showAllNavLinks,
  handleSearchChange,
  searchTerm,
  handleSearchSubmit,
}) {
  return (
    <>
      <section
        className={`search-form ${
          showAllNavLinks ? 'search-form_mobile-menu' : ''
        }`}
      >
        <>
          <h2 className="search-form__title">
            What&apos;s going on in the world?
          </h2>
          <p className="search-form__subtitle">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
        </>
        <form className="search-form__form">
          <input
            className="search-form__search-bar"
            type="search"
            id="search"
            name="search"
            aria-label="search-for-articles"
            placeholder="Enter topic"
            onChange={handleSearchChange}
            value={searchTerm}
          />
          <button type="submit" onClick={handleSearchSubmit} className="search-form__search-button clickable">
            Search
          </button>
        </form>
      </section>
    </>
  );
}

export default SearchForm;
