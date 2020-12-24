import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Login({
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
  return (
    <PopupWithForm 
      modalType={modalType}
      modalIsOpen={modalIsOpen}
      onClose={onClose}
      handleSignupButtonClick={handleSignupButtonClick}
      handleSigninButtonClick={handleSigninButtonClick}
      windowInnerWidth={windowInnerWidth}
      handleInputFocus={handleInputFocus}
      showKeyboard={showKeyboard}
      isValid={isValid}
      handleChange={handleChange}
      resetForm={resetForm}
      errors={errors}
      values={values}
      handleSignupSubmit={handleSignupSubmit}
      handleSigninSubmit={handleSigninSubmit}
    />
  );
}

export default Login;
