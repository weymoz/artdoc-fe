import React, { useState } from 'react';
import cx from 'classnames';
import { render } from 'react-dom';
import styles from './support.css';
import { SelectDonation } from './selectDonation';
import axios from 'axios';
import { withLanguages, useTranslatedContent } from '../i18n';
import { support as supportContent } from '../../translations/support';

export const Support = withLanguages(({ lang }) => {
  const { email, accept, termsConditions, support, pay } = useTranslatedContent(
    supportContent
  );
  const [donation, setDonation] = useState(0);
  const [emailValue, setEmailValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);



  const onFormSubmit = e => {
    e.preventDefault();

    const params = new URLSearchParams();
    params.append('email', emailValue);
    params.append('price', donation);
    params.append('lang', lang);
    return axios
      .post('/api/payment/donate', params)
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
        <div
          className={cx(
            'modal modal_autoclosable modal_has-close modal_size_s popup popup_autoclosable i-bem modal_js_inited popup_js_inited modal_visible popup_visible modal_has-animation',
            !modalOpened && styles.invisible
          )}
          role="dialog"
          style={{ zIndex: 2001 }}
        >
          <div className="modal__table">
            <div className="modal__cell">
              <div onClick={() => setModalOpened(false)} className={styles.overlay}></div>
              <div
                className={cx(
                  'modal__content i-bem modal__content_js_inited',
                  styles.modalContent
                )}
              >
                <form noValidate className="form form_view_payment form_theme_artdoc form_has-validation form_size_m i-bem form_js_inited">
                  <div id="payment-form" />

                  <div className="form__footer">
                    <button
                      id="submit-button"
                      className="button button_type_submit button_width_available button_size_xxl button_theme_artdoc form__submit button__control font font_family_helvetica-neue-bold font_loaded i-bem button_js_inited button__control_js_inited"
                      role="button"
                      type="submit"
                    >
                      <span className="button__text">Pay</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <form noValidate onSubmit={onFormSubmit}>
          <div className="card-ticket__section">
            <div className="card-ticket__content">
              <span className={styles.payNote}>{pay}</span>
              <SelectDonation donation={donation} setDonation={setDonation} />
            </div>
            <div className="card-ticket__aside">
              <div className="form form_view_order form_theme_artdoc-dark form_has-validation form_message_popup form_size_m i-bem">
                <fieldset className="fieldset fieldset_size_m fieldset_theme_artdoc-dark form__content">
                  <div className="fieldset__content">
                    <div className="form-field form-field_type_input form-field_required form-field_validate_email form-field_message_text form-field_size_m form-field_theme_artdoc-dark form__section i-bem">
                      <div className="form-field__control">
                        <span className="input input_width_available input_size_xl input_theme_artdoc-dark i-bem input_js_inited">
                          <span className="input__box">
                            <input
                              value={emailValue}
                              onChange={e => setEmailValue(e.target.value)}
                              className="input__control i-bem input__control_js_inited"
                              name="email"
                              placeholder={email}
                            />
                          </span>
                        </span>
                      </div>
                      <div className="message message_type_text message_theme_artdoc-dark message_size_m form-field__message message__control i-bem message_js_inited" />
                    </div>
                    <div className="form-field form-field_type_checkbox form-field_required form-field_message_text form-field_size_m form-field_theme_artdoc-dark form__section i-bem">
                      <label className="checkbox checkbox_size_s checkbox_theme_artdoc-dark i-bem checkbox_js_inited">
                        <span className="checkbox__box">
                          <input
                            className="checkbox__control i-bem checkbox__control_js_inited"
                            type="checkbox"
                            autoComplete="off"
                            name="term"
                            defaultValue="confirm"
                          />
                        </span>
                        <span className="checkbox__text" role="presentation">
                          {accept}{' '}
                          <a
                            className="link link_size_s link_theme_artdoc-dark link__control i-bem"
                            target="_blank"
                            role="link"
                            href="/terms"
                          >
                            {termsConditions}
                          </a>
                        </span>
                      </label>
                      <div className="message message_type_text message_theme_artdoc-dark message_size_m form-field__message message__control i-bem message_js_inited" />
                    </div>
                  </div>
                </fieldset>
                <div className="form__footer">
                  <button
                    className="button button_type_submit button_width_available button_size_xl button_theme_artdoc-dark form__submit button__control font font_family_helvetica-neue-bold font_loaded i-bem button_js_inited button__control_js_inited"
                    role="button"
                    type="submit"
                  >
                    <span className="button__text">{support}</span>
                  </button>
                </div>
                <div
                  className="modal modal_autoclosable modal_has-close modal_size_s modal_theme_artdoc-dark popup popup_autoclosable i-bem"
                  role="dialog"
                  aria-hidden="true"
                >
                  <div className="modal__table">
                    <div className="modal__cell">
                      <div className="modal__content" />
                    </div>
                  </div>
                </div>
                <div className="message message_type_popup message_theme_artdoc-dark message_size_m form__message i-bem message_js_inited _popup-destructor_js_inited">
                  <div
                    className="popup popup_target_anchor popup_theme_artdoc-dark popup_size_m message__control i-bem popup_js_inited"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </article>
    </div>
  );
});

const container = document.getElementById('support-page-react-root');
if (container) {
  render(<Support />, container);
}
