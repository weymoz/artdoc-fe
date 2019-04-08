export const getTransactionRequest = ({ payload, email, lang }) => {
  const request = new URLSearchParams();
  request.append('payment_nonce', payload.nonce);
  request.append('email', email);
  request.append('lang', lang);
  return request;
};
