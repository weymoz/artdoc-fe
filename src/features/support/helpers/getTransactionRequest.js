export const  getTransactionRequest = (payload, emailValue, lang) => {
  const request = new URLSearchParams();
  request.append('payment_nonce', payload.nonce);
  request.append('email', emailValue);
  request.append('lang', lang);
  return request;
}
