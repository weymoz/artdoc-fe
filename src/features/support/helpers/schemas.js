import * as yup from 'yup'

export const getSchemas = lang => ({
  email: yup
    .string()
    .email('email')
    .required('email'),
  donation: yup
    .number()
    .positive('donation')
    .moreThan(lang === 'ru' ? 99 : 2.99, 'donation')
    .required('donation'),
  term: yup
    .mixed()
    .oneOf([true], 'term')
    .required('term')
})
