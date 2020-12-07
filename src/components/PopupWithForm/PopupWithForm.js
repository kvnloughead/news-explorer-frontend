import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

function PopupWithForm({
  modalType,
  modalIsOpen,
  onClose,
  handleSigninButtonClick,
  handleSignupButtonClick,
  handleSignin,
  handleSignup,
  windowInnerWidth,
}) {
  const [isValid, setIsValid] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);

  const handleInputFocus = () => {
    setShowKeyboard(!showKeyboard);
  };

  // useEffect(() => {
  //   if (this.props.id === document.activeElement.id) {
  //     setShowKeyboard(true);
  //   }
  // })

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
          'popup__overlay' + (modalIsOpen ? ' popup__overlay_visible' : '')
        }
        onClick={onClose}
      ></div>
      <div
        className={
          `popup` +
          (modalIsOpen ? ' popup_visible' : '') +
          (modalType === 'success' ? ' popup_success' : '')
        }
      >
        {windowInnerWidth > 767 && (
          <button
            className={'popup__close-button clickable'}
            type='reset'
            aria-label={`close-modal`}
            onClick={onClose}
          ></button>
        )}
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
              onFocus={handleInputFocus}
              onBlur={handleInputFocus}
            />
            <span className='popup__input-error' id='email-input-error'>
              Insert error message here
            </span>
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
              onFocus={handleInputFocus}
              onBlur={handleInputFocus}
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
                  onFocus={handleInputFocus}
                  onBlur={handleInputFocus}
                />
                <span
                  className='popup__input-error'
                  id='username-input-error'
                ></span>
              </>
            )}
            <button
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
        {showKeyboard && (
          <div
            className={`keyboard `}
          ></div>
        )}
      </div>
    </>
  );
}

export default PopupWithForm;
