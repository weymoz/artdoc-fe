import * as yup from 'yup';

export const schemas = {
  email: yup
    .string()
    .email('email')
    .required('email'),
  donation: yup
    .number()
    .positive('donation')
    .required('donation'),
  term: yup
    .mixed()
    .oneOf([true], 'term')
    .required('term')
};
