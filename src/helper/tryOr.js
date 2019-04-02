export const tryOr = (calculate, or) => {
  try {
    return calculate()
  } catch (e) {
    return or
  }
}