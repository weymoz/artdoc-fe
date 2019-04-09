import { validateField } from './validateField';

export const validateFields = (values, schemas) => {
  try {
    const result = {};
    for (const key in schemas) {
      const error = validateField(values[key], schemas[key]);
      if (error) {
        result[key] = error;
      }
    }

    return result;
  } catch (error) {
    return {};
  }
};
