export const validateField = (value, schema) => {
  try {
    schema.validateSync(value)
  } catch (error) {

    return error.message
  }
}
