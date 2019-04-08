export const getPaymentRequest = (emailValue, donation, lang) => {
  const request = new URLSearchParams();
  request.append('email', emailValue);
  request.append('price', donation);
  request.append('lang', lang);
  request.append('currency', lang === 'ru' ? 1 : 2);
  return request;
}
