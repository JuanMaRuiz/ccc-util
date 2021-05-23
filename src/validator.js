import { ESValidator } from './validators/es-validator.js';
import { NZValidator } from './validators/nz-validator.js';

export const validate = (ccc, { institution = '', country = 'es' } = {}) => {
  const validator = {
    es: ESValidator,
    nz: NZValidator,
  };

  try {
    return validator[country](ccc, {institution, country});
  } catch (e) {
    throw new Error(`There was an error ${e}. Not found validator for country ${country}`);
  }
};
