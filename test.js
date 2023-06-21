const valid = require('validator');
const validateEmail = email => {
  return valid.isEmail(email);
};
console.log(
  "Is mango@mail.com a valid email?: ",
  validateEmail("mango@mail.com")
);
console.log(
  "Is Mangozedog.com a valid email?: ",
  validateEmail("Mangozedog.com"))