

const validate = (ccc, { institution = '', country = 'es' } = {}) => {
  const validate = require(`./validators/${country}-validator.js`);
  return validate(ccc, {institution, country});
};

module.exports = validate;
