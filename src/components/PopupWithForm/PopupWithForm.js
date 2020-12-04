import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

function PopupWithForm({
  modalType,
  isModalOpen,
  onClose,
  handleSigninButtonClick,
  handleSignupButtonClick,
  handleSignin,
  handleSignup,
}) {

  const [isValid, setIsValid] = useState(false);
  
  useEffect(() => {
    document.addEventListener('keydown', onClose);
    return () => {
      document.removeEventListener('keydown', onClose);
    };
  });

  return (
    <>
      <div
        className={
          'popup__overlay' + (isModalOpen ? ' popup__overlay_visible' : '')
        }
        onClick={onClose}
      ></div>
      <div className={`popup` + (isModalOpen ? ' popup_visible' : '')}>
        <button
          className={'popup__close-button'}
          type='reset'
          aria-label={`close-modal`}
          onClick={onClose}
        ></button>
        <h2 className={'popup__title'}>
          {modalType === 'success'
            ? 'Registration successfully completed!'
            : `Sign ${modalType === 'signin' ? 'in' : 'up'}`}
        </h2>
        {modalType !== 'success' && (
          <form
            id={`${modalType}-form`}
            name={`${modalType}Form`}
            className='popup__form'
            action='#'
            noValidate
            onSubmit={modalType === 'signin' ? handleSignin : handleSignup}
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
              autoComplete='on'
            />
            <span
              className='popup__input-error'
              id='password-input-error'
            ></span>
            {modalType === 'signup' && (
              <>
                <label class='popup__input-label' for='username'>
                  Username
                </label>
                <input
                  className='popup__input'
                  type='text'
                  id='username'
                  name='username'
                  placeholder='Enter your username'
                  required
                  autoComplete='on'
                />
                <span
                  className='popup__input-error'
                  id='username-input-error'
                ></span>
              </>
            )}
            <button
              // add clickable class when made active
              className={`popup__submit-button ${
                isValid ? 'popup__submit-button_active clickable' : ''
              }`}
              type='submit'
              value={`Sign ${modalType === 'signin' ? 'in' : 'up'}`}
              aria-label={`submit-sign${modalType === 'signin' ? 'in' : 'up'}`}
            >
              Sign {modalType === 'signin' ? 'in' : 'up'}
            </button>
          </form>
        )}
        <p
          className={`popup__go-elsewhere ${
            modalType === 'success' ? 'popup__go-elsewhere_success' : ''
          }`}
        >
          {modalType !== 'success' ? 'or ' : ''}
          <Link
            onClick={
              modalType === 'signin'
                ? handleSignupButtonClick
                : handleSigninButtonClick
            }
            className={`popup__go-elsewhere popup__go-elsewhere_link`}
          >
            Sign {modalType === 'signin' ? 'up' : 'in'}
          </Link>
        </p>
      </div>
    </>
  );
}

export default PopupWithForm;
