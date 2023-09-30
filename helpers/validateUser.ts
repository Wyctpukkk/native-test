// регулярные выражения
const regexpPass = /^[^\u0400-\u04FF]*$/;
const regexpEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateUser = (login: string, password: string) => {
  // Валидация email
  const loginValid = login.toLowerCase().match(regexpEmail);

  // Валидация пароля
  const passValid = password.match(regexpPass);

  return loginValid && passValid;
};
