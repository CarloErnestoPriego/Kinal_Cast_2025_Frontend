export const validateDescription = (description) => {
  return description.length >= 10 && description.length <= 200;
};

export const descriptionValidateMessage = 'La descripcion debe tener de 10 a 200 caracteres';
