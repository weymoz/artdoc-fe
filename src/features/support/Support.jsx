import React, { useState } from 'react';
import cx from 'classnames';
import { render } from 'react-dom';
import { Form, Field } from 'react-final-form';
import { SelectDonation } from './components/SelectDonation';
import axios from 'axios';
import { withLanguages, useTranslatedContent } from '../i18n';
import { support as supportContent } from '../../translations/support';
import { CardForm } from './components/CardForm';
import { EmailFormGroup } from './components/EmailFormGroup';
import { getPaymentRequest } from './helpers/getpaymentRequest';
import { getTransactionRequest } from './helpers/getTransactionRequest';



export const Support = withLanguages(({ lang }) => {
  const { email, accept, termsConditions, support, pay } = useTranslatedContent(
    supportContent
  );
  // form values
  const [donation, setDonation] = useState(0);
  const [emailValue, setEmailValue] = useState('');
  const [agreed, setAgreed] = useState(false);

  const [modalOpened, setModalOpened] = useState(false);
  const [error, setError] = useState({
    donation: false,
    emailValue: false,
    agreed: false
  });

  const validateForm = () => {
    if (donation === 0) {
      setError(errors => ({ ...errors, donation: 'Выберите сумму' }));
    }
    setError(errors => ({ ...errors, donation: false }));

    if (emailValue) {
    }
  };
  const onFormSubmit = e => {
    e.preventDefault();

    const paymentRequest = getPaymentRequest(emailValue, donation, lang);
    return axios
      .post('/api/payment/donate', paymentRequest)
      .then(({ data }) => {
        console.log(data);

        const button = document.querySelector('#submit-button');

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
                  const transactionRequest = getTransactionRequest(
                    payload,
                    emailValue,
                    lang
                  );
                  axios
                    .post(
                      `/api/payment/${data.transaction_id}`,
                      transactionRequest
                    )
                    .then(({ data }) => {
                      if (data.error) {
                        console.log(data);
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
      })
      .catch(console.log);
  };

  return (
    <div className="page__content page__content_width_narrow page__content_gap_bottom page__content_gap_top">
      <article
        className={cx(
          'card-ticket card-ticket_view_order card-ticket_size_m card-ticket_theme_artdoc i-bem card-ticket_js_inited'
        )}
      >
        <CardForm modalOpened={modalOpened} setModalOpened={setModalOpened} />

        <Form
          onSubmit={onFormSubmit}
          render={({ handleSubmit}) => (
            <form noValidate onSubmit={handleSubmit}>
              <div className="card-ticket__section">
                <SelectDonation
                  translation={{ pay }}
                  donation={donation}
                  setDonation={setDonation}
                />

                <EmailFormGroup
                  emailValue={emailValue}
                  setEmailValue={setEmailValue}
                  agreed={agreed}
                  setAgreed={setAgreed}
                  translation={{
                    email,
                    accept,
                    termsConditions,
                    support
                  }}
                />
              </div>
            </form>
          )}
        />
      </article>
    </div>
  );
});

const container = document.getElementById('support-page-react-root');
if (container) {
  render(<Support />, container);
}
