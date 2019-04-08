import { getTransactionRequest } from "./getTransactionRequest";

export const placeCardForm = (data, setModalOpened, button, values) => {
  braintree.dropin.create(
    {
      authorization: data.clientToken,
      container: '#payment-form',
      locale: data.locale
    },
    function(createErr, instance) {
      setModalOpened(true);
      button.addEventListener('click', function() {
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
