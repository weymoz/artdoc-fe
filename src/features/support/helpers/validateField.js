export const validateField = (value, schema, errorMessage) => {
  try {
    schema.validateSync(value)
  } catch (error) {

    return errorMessage
  }
}
