import React, { useState } from 'react';
import cx from 'classnames';
import { render } from 'react-dom';
import { isEmpty } from 'lodash';
import { Form } from 'react-final-form';
import { SelectDonation } from './components/SelectDonation';
import axios from 'axios';
import { withLanguages, useTranslatedContent } from '../i18n';
import { support as supportContent } from '../../translations/support';
import { CardForm } from './components/CardForm';
import { EmailFormGroup } from './components/EmailFormGroup';
import { getPaymentRequest } from './helpers/getpaymentRequest';
import { placeCardForm } from './helpers/placeCardForm';
import { validateFields } from './helpers/validateFields';
import { schemas } from './helpers/schemas';

export const Support = withLanguages(() => {
  const {
    email,
    term,
    termsConditions,
    support,
    pay,
    validationErrors
  } = useTranslatedContent(supportContent);

  const [modalOpened, setModalOpened] = useState(false);

  const onFormSubmit = values => {
    const errors = validateFields(values, schemas);
    if (!isEmpty(errors)) {
      return errors;
    }

    const paymentRequest = getPaymentRequest(values);
    return axios
      .post('/api/payment/donate', paymentRequest)
      .then(({ data }) => {
        console.log(data);

        const button = document.querySelector('#submit-button');

        placeCardForm(data, setModalOpened, button, values);
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
          initialValues={{ email: '', donation: '', term: false }}
          onSubmit={onFormSubmit}
          render={({ handleSubmit }) => (
            <form noValidate onSubmit={handleSubmit}>
              <div className="card-ticket__section">
                <SelectDonation
                  validationErrors={validationErrors}
                  translation={{ pay }}
                />

                <EmailFormGroup
                  validationErrors={validationErrors}
                  translation={{
                    email,
                    term,
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
