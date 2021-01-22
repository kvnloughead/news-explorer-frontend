import React from 'react';
import { CARDS_LIST_ERROR_TEXT, CARDS_LIST_ERROR_TITLE } from '../../utils/constants';

function CardsListError({ type }) {
  return (
    <div className="not-found">
      <div className="not-found__icon" />
      <h3 className="not-found__title">
        {CARDS_LIST_ERROR_TITLE[type]}
      </h3>
      <p className="not-found__text">
        {CARDS_LIST_ERROR_TEXT[type]}
      </p>
    </div>
  );
}

export default CardsListError;
