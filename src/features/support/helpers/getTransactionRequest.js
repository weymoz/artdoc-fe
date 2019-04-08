export const getTransactionRequest = ({ payload }) => {
  const request = new URLSearchParams();
  request.append('payment_nonce', payload.nonce);
  return request;
};
