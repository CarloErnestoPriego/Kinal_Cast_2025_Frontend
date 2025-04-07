export const validateConfirmPassword = (pass, confPass) => {
  return pass === confPass;
};

export const passwordConfirmationMessage = 'La contraseña no coincides';
