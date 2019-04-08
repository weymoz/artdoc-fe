import axios from 'axios';

import { getTransactionRequest } from './getTransactionRequest';

export const placeCardForm = ({
  data,
  setModalOpened,
  setFormSent,
  setCardFormError,
  lang
}) => {
  braintree.dropin.create(
    {
      authorization: data.clientToken,
      container: '#payment-form',
      locale: data.locale
    },
    function(createErr, instance) {
      const button = document.querySelector('#submit-button');
      setModalOpened(true);
      button.addEventListener('click', function() {
        setFormSent(true);
        instance.requestPaymentMethod(function(err, payload) {
          if (err) {
            console.error(err);
          } else {
            const transactionRequest = getTransactionRequest({
              payload
            });
            axios
              .post(`/api/payment/${data.transaction_id}`, transactionRequest)
              .then(({ data }) => {
                if (data.error) {
                  console.error(data);
                  setCardFormError(data.error);
                } else {
                  console.log(data);
                  window.location.href = '/' + lang + '/thanks-support';
                }
              });
          }
        });
      });
    }
  );
};
