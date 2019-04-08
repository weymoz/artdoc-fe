import { getCurrency } from "./getCurrency";

export const getPaymentRequest = ({email, donation, lang}) => {
  const request = new URLSearchParams();
  request.append('email', email);
  request.append('price', donation);
  request.append('lang', lang);
  request.append('currency', getCurrency(lang));
  return request;
}
