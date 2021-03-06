const validate = require('./../src/validator.js');

test('it should return TRUE if the passed value is a valid CCC', () => {
  expect(validate('0144 9181 1115 8790 3375')).toBe(true);
  expect(validate('0144 91811115 87903375')).toBe(true);
  expect(validate('0144-9181-1115-8790-3375')).toBe(true);
  expect(validate('0144 -9181- 1115- 8790-3375')).toBe(true);
});

test('it should return FALSE if the passed value is not a valid CCC', () => {
  expect(validate('7220199120124205847470')).toBe(false);
  expect(validate('0049-1500-05-1234567890')).toBe(false);
});

test('it should throw an error when the "institution" option is not a string', () => {
  expect( () => validate('7220199120124205847470', { institution: 2})).toThrow('Institution param is not a valid string');
  expect( () => validate('7220199120124205847470', { institution: []})).toThrow('Institution param is not a valid string');
  expect( () => validate('7220199120124205847470', { institution: true})).toThrow('Institution param is not a valid string');
  expect( () => validate('7220199120124205847470', { institution: {}})).toThrow('Institution param is not a valid string');
});

test('it return TRUE when passed insitution code and codeEntity value matches', () => {
  expect(validate('0144 9181 1115 8790 3375', { institution: 'BNP Paribas Securities Services, S.E.'})).toBe(true);
});

test('it return TRUE when country is "nz" and passed account is correct', () => {
  expect(validate('01090200068389000', { country: 'nz'})).toBe(true);
});

test('it return FALSE when country is "nz" and passed account is incorrect', () => {
  expect(validate('26485749385729888', { country: 'nz'})).toBe(false);
});
