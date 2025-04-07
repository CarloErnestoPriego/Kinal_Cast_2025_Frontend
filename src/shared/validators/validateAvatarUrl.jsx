
export const validateAvatarUrl = (url) => {
  const regex = /^(ftp|http|https):\/\/[^ "]+$/;
  return regex.test(url);
};

export const avatarUrlValidateMessage = 'Esta no es una URL válida.';
