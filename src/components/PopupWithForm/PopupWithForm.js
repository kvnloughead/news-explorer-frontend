import { useEffect } from 'react';

function PopupWithForm({
  modalType,
  modalIsOpen,
  onClose,
  handleSigninButtonClick,
  handleSignupButtonClick,
  windowInnerWidth,
  handleInputFocus,
  isValid,
  handleChange,
  resetForm,
  errors,
  values,
  handleSignupSubmit,
  handleSigninSubmit,
}) {
  useEffect(() => {
    document.addEventListener('keydown', onClose);
    return () => {
      document.removeEventListener('keydown', onClose);
    };
  });

  return (
    <>
      <div
        role="button"
        aria-label="close-modal"
        tabIndex={0}
        className={`popup__overlay${
          modalIsOpen ? ' popup__overlay_visible' : ''
        }`}
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onclose();
          }
        }}
      />
      <div
        className={`popup${modalIsOpen ? ' popup_visible' : ''}${
          modalType === 'success' ? ' popup_success' : ''
        }`}
      >
        {windowInnerWidth > 767 && (
          <button
            type="button"
            aria-label="close-modal"
            className="popup__close-button clickable"
            onClick={onClose}
          />
        )}
        <h2 className="popup__title">
          {modalType === 'success'
            ? 'Registration successfully completed!'
            : `Sign ${modalType === 'signin' ? 'in' : 'up'}`}
        </h2>
        {modalType !== 'success' && (
          <form
            onSubmit={modalType === 'signin' ? handleSigninSubmit : handleSignupSubmit}
            id={`${modalType}-form`}
            name={`${modalType}Form`}
            className="popup__form"
            action="#"
            noValidate
            onReset={resetForm}
          >
            <label className="popup__input-label" htmlFor="email">
              Email
            </label>
            <input
              className="popup__input"
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              required
              autoComplete="on"
              onFocus={handleInputFocus}
              onBlur={handleInputFocus}
              onChange={handleChange}
              value={values.email}
            />
            <span className="popup__input-error" id="email-input-error">
              {errors.email}
            </span>
            <label className="popup__input-label" htmlFor="password">
              Password
            </label>
            <input
              className="popup__input"
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              required
              autoComplete="on"
              onFocus={handleInputFocus}
              onBlur={handleInputFocus}
              onChange={handleChange}
              minLength={4}
            />
            <span className="popup__input-error" id="password-input-error">
              {errors.password}
            </span>
            {modalType === 'signup' && (
              <>
                <label className="popup__input-label" htmlFor="username">
                  Username
                </label>
                <input
                  className="popup__input"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  required
                  autoComplete="on"
                  onFocus={handleInputFocus}
                  onBlur={handleInputFocus}
                  onChange={handleChange}
                  minLength={4}
                />
                <span
                  className="popup__input-error"
                  id="username-input-error"
                >
                  {errors.username}
                </span>
              </>
            )}
            <button
              className={`popup__submit-button ${
                isValid ? 'popup__submit-button_active clickable' : ''
              }`}
              disabled={!isValid}
              type="submit"
              value={`Sign ${modalType === 'signin' ? 'in' : 'up'}`}
              aria-label={`submit-sign${modalType === 'signin' ? 'in' : 'up'}`}
            >
              Sign
              {modalType === 'signin' ? ' in' : ' up'}
            </button>
          </form>
        )}
        <p
          className={`popup__go-elsewhere ${
            modalType === 'success' ? 'popup__go-elsewhere_success' : ''
          }`}
        >
          {modalType !== 'success' ? 'or ' : ''}
          <button
            type="button"
            aria-label={modalType === 'signin' ? 'sign-up' : 'sign-in'}
            onClick={
              modalType === 'signin'
                ? handleSignupButtonClick
                : handleSigninButtonClick
            }
            className="popup__go-elsewhere popup__go-elsewhere_link"
          >
            Sign
            {modalType === 'signin' ? ' up' : ' in'}
          </button>
        </p>
      </div>
    </>
  );
}

export default PopupWithForm;
