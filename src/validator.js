const formatString = string => string.split('-').join('').replace(/\s/g, '');

const factors = [1, 2, 4, 8, 5, 10, 9, 7, 3, 6];

const getEntityAndOfficeNumbers = (str) => {
  return `00${str.substring(0,8)}`;
};

const getAccountNumber = (str) => {
  return str.substring(10,20);
};

const getControlDigit = (str) => {
  let controlDigit;

  const sum = Array.from(str).map((el, index) => {
    return el * (factors[index]);
  }).reduce((acc, curr) => acc + curr);

  const num = 11 - (sum % 11);

  if (num === 11 ) {
    controlDigit = 0;
  } else if (num === 10) {
    controlDigit = 1;
  } else {
    controlDigit = num;
  }

  return controlDigit;

};

const validate = (ccc) => {
  const cccSanitized = formatString(ccc);
  const entityOfficeNumber = getEntityAndOfficeNumbers(cccSanitized);
  const accountNumber = getAccountNumber(cccSanitized);
  const firstControlDigit = getControlDigit(entityOfficeNumber);
  const secondControlDigit = getControlDigit(accountNumber);

  return parseInt(cccSanitized.substring(8,9)) === firstControlDigit && parseInt(cccSanitized.substring(9,10)) === secondControlDigit;
};

module.exports = validate;
