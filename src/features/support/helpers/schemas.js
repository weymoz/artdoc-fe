import * as yup from 'yup'

export const schemas = {
  en: {
    email: yup
      .string()
      .email('email')
      .required('email'),
    donation: yup
      .number()
      .positive('donation')
      .moreThan(2.99999999999999, 'donation')
      .required('donation'),
    term: yup
      .mixed()
      .oneOf([true], 'term')
      .required('term')
  },
  ru: {
    email: yup
      .string()
      .email('email')
      .required('email'),
    donation: yup
      .number()
      .positive('donation')
      .moreThan(99, 'donation')
      .required('donation'),
    term: yup
      .mixed()
      .oneOf([true], 'term')
      .required('term')
  }
}
