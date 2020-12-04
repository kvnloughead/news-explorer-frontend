import React from 'react';

import { Link } from 'react-router-dom';

function PopupWithForm({ modalType, isModalOpen, onClose, onSubmit }) {
  return (
    <>
      <div
        className={
          'popup__overlay' + (isModalOpen ? ' popup__overlay_visible' : '')
        }
      ></div>
      <div className={`popup` + (isModalOpen ? ' popup_visible' : '')}>
        <button
          className={'popup__close-button'}
          type='reset'
          aria-label={`close-modal`}
          onClick={onClose}
        ></button>
        <h2 className={'popup__title'}>Sign in</h2>
        <form
          id={`${modalType}-form`}
          name={`${modalType}Form`}
          className='popup__form'
          action='#'
          noValidate
          onSubmit={onSubmit}
        >
          <label class='popup__input-label' for='email'>
            Email
          </label>
          <input
            className='popup__input'
            type='email'
            id='email'
            name='email'
            placeholder='Enter email'
            required
            // onChange={handleEmailChange}
            autoComplete='on'
          />
          <span className='popup__input-error' id='email-input-error'></span>
          <label class='popup__input-label' for='password'>
            Password
          </label>
          <input
            className='popup__input'
            type='password'
            id='password'
            name='password'
            placeholder='Enter password'
            required
            // onChange={handlepasswordChange}
            autoComplete='on'
          />
          <span className='popup__input-error' id='password-input-error'></span>
          <button
            // add clickable class when made active
            className='popup__submit-button popup__submit_inactive'
            type='submit'
            value='Sign in'
            aria-label='submit-signin'
          >
            Sign in
          </button>
          <p className='popup__go-elsewhere'>
            or <Link className='popup__go-elsewhere popup__go-elsewhere_link'>Sign up</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default PopupWithForm;
