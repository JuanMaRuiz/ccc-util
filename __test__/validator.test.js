const validate = require('./../src/validator.js');

test('it should return TRUE if the passed value is a valid CCC', () => {
  expect(validate('14650100971716610913')).toBe(true);
  expect(validate('14650100 97 1716610913')).toBe(true);
  expect(validate('14650100-97-1716610913')).toBe(true);
  expect(validate('14650100- 97-17166 10913')).toBe(true);
});

test('should return FALSE if the passed value is not a valid CCC', () => {
  expect(validate('1465010097171661913')).toBe(false);
  expect(validate('0049-1500-05-1234567890')).toBe(false);
});
