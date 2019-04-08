import { validateField } from './validateField';

export const validateFields = (values, schemas, messages) => {
  try {
    const result = {};
    for (const key in values) {
      const error = validateField(values[key], schemas[key], messages[key]);
      if (error) {
        result[key] = error;
      }
    }

    return result;
  } catch (error) {
    return {};
  }
};
