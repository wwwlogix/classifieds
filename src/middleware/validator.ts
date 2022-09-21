import { check } from 'express-validator';

export const getValidation = () => {
  return [
    check('subject').not().isEmpty(),
    check('body').not().isEmpty(),
    check('email').not().isEmpty().isEmail(),
  ];
};
