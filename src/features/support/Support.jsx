import React, { useState } from 'react'
import cx from 'classnames'
import useKey from 'use-key-hook'
import { render } from 'react-dom'
import { isEmpty } from 'lodash'
import { Form } from 'react-final-form'
import { SelectDonation } from './components/SelectDonation'
import axios from 'axios'
import { withLanguages, useTranslatedContent } from '../i18n'
import { support as supportContent } from '../../translations/support'
import { CardForm } from './components/CardForm'
import { EmailFormGroup } from './components/EmailFormGroup'
import { getPaymentRequest } from './helpers/getpaymentRequest'
import { placeCardForm } from './helpers/placeCardForm'
import { validateFields } from './helpers/validateFields'
import { schemas } from './helpers/schemas'
import styles from './support.css'

export const Support = withLanguages(({ lang }) => {
  const {
    email,
    term,
    termsConditions,
    support,
    pay,
    validationErrors,
    payButton,
    payError,
    title,
    supportText
  } = useTranslatedContent(supportContent)

  const [modalOpened, setModalOpened] = useState(false)
  const [cardFormError, setCardFormError] = useState('')
  const [formSent, setFormSent] = useState(false)

  const closePopup = () => {
    setModalOpened(false)
    document.location.reload()
  }
  useKey(
    () => {
      if (modalOpened) {
        closePopup()
      }
    },
    {
      // escape
      detectKeys: [27]
    }
  )

  const onFormSubmit = values => {
    const errors = validateFields(values, schemas)
    if (!isEmpty(errors)) {
      return errors
    }

    const paymentRequest = getPaymentRequest({ ...values, lang })
    return axios
      .post('/api/payment/donate', paymentRequest)
      .then(({ data }) => {
        console.log(data)

        placeCardForm({
          data,
          setModalOpened,
          setFormSent,
          setCardFormError,
          lang
        })
      })
      .catch(console.log)
  }

  return (
    <div className="page__content page__content_width_narrow page__content_gap_bottom">
      <h1 className="page__title page__title_size_xxl heading heading_align_center heading_caps font font_family_helvetica-neue-condensed-bold font_loaded">
        {title}
      </h1>
      <div className={styles.text}>
        {supportText.map((paragraph, i) => (
          <p
            key={i}
            className="paragraph paragraph_bottom-offset paragraph_size_m paragraph_theme_artdoc"
          >
            {paragraph}
          </p>
        ))}
      </div>
      <article
        className={cx(
          'card-ticket card-ticket_view_order card-ticket_size_m card-ticket_theme_artdoc i-bem card-ticket_js_inited'
        )}
      >
        <CardForm
          translation={{ payButton, payError }}
          cardFormError={cardFormError}
          formSent={formSent}
          setFormSent={setFormSent}
          modalOpened={modalOpened}
          closePopup={closePopup}
        />

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
  )
})

const container = document.getElementById('support-page-react-root')
if (container) {
  render(<Support />, container)
}
