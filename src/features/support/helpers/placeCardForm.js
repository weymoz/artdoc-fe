import { getTransactionRequest } from './getTransactionRequest';

export const placeCardForm = (data, setModalOpened, values, setFormSent, setCardFormError) => {
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
        setFormSent(true)
        instance.requestPaymentMethod(function(err, payload) {
          if (err) {
            console.error(err);
          } else {
            const transactionRequest = getTransactionRequest({
              ...values,
              payload
            });
            axios
              .post(`/api/payment/${data.transaction_id}`, transactionRequest)
              .then(({ data }) => {
                if (data.error) {
                  console.error(data);
                  setCardFormError(data.error)
                } else {
                  console.log(data);
                  // window.location.href =
                  //   '/' +
                  //   lang +
                  //   '/order/' +
                  //   data.transaction_id +
                  //   '?payment_nonce=' +
                  //   payload.nonce;
                }
              });
          }
        });
      });
    }
  );
};
