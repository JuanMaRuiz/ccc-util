import { describe, it } from 'mocha';
import { expect } from 'chai';
import { validate } from '../src/validator.js';

describe('validate method', () => {
  it('it should return TRUE if the passed value is a valid CCC', () => {
    expect(validate('0144 9181 1115 8790 3375')).to.be.true;
    expect(validate('0144 91811115 87903375')).to.be.true;
    expect(validate('0144-9181-1115-8790-3375')).to.be.true;
    expect(validate('0144 -9181- 1115- 8790-3375')).to.be.true;
  });

  it('it should return FALSE if the passed value is not a valid CCC', () => {
    expect(validate('7220199120124205847470')).to.be.false;
    expect(validate('0049-1500-05-1234567890')).to.be.false;
  });

  it('it should throw an error when the "institution" option is not a string', () => {
    expect( () => validate('7220199120124205847470', { institution: 2})).to.throw('Institution param is not a valid string');
    expect( () => validate('7220199120124205847470', { institution: []})).to.throw('Institution param is not a valid string');
    expect( () => validate('7220199120124205847470', { institution: true})).to.throw('Institution param is not a valid string');
    expect( () => validate('7220199120124205847470', { institution: {}})).to.throw('Institution param is not a valid string');
  });

  it('it return TRUE when passed insitution code and codeEntity value matches', () => {
    expect(validate('0144 9181 1115 8790 3375', { institution: 'BNP Paribas Securities Services, S.E.'})).to.be.true;
  });

  it('it return TRUE when country is "nz" and passed account is correct', () => {
    expect(validate('01090200068389000', { country: 'nz'})).to.be.true;
  });

  it('it return FALSE when country is "nz" and passed account is incorrect', () => {
    expect(validate('26485749385729888', { country: 'nz'})).to.be.false;
  });
});
