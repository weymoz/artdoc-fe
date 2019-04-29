export const getCurrencyLang = currency =>
  currency.toUpperCase() === '$' ? 'en' : 'ru'
