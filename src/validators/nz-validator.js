import { isValidNZBankNumber } from '@fnzc/nz-bank-account-validator';

// '00', '0000', '00000000', '000'
const getFormattedAccountNumber = (ccc) => {
  const group1 = ccc.substring(0,2);
  const group2 = ccc.substring(2,6);
  const group3 = ccc.substring(6,14);
  const group4 = ccc.substring(14,17);

  return {
    group1,
    group2,
    group3,
    group4
  };
};

export const NZValidator = (ccc) => {
  const { group1, group2, group3, group4 } = getFormattedAccountNumber(ccc);
  return isValidNZBankNumber(group1, group2, group3, group4);
};
