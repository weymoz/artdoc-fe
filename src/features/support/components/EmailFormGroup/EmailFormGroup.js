import React from 'react';
import styles from './emailFormGroup.css';
import cx from 'classnames';
import { Field } from 'react-final-form';

export const EmailFormGroup = ({
  translation: { email, accept, termsConditions, support }
}) => (
  <div className="card-ticket__aside">
    <div className="form form_view_order form_theme_artdoc-dark form_has-validation form_message_popup form_size_m i-bem">
      <fieldset className="fieldset fieldset_size_m fieldset_theme_artdoc-dark form__content">
        <div className="fieldset__content">
          <div className="form-field form-field_type_input form-field_required form-field_validate_email form-field_message_text form-field_size_m form-field_theme_artdoc-dark form__section i-bem">
            <div className="form-field__control">
              <span className="input input_width_available input_size_xl input_theme_artdoc-dark i-bem input_js_inited">
                <span className="input__box">
                  <Field
                    name="email"
                    className="input__control i-bem input__control_js_inited"
                    component="input"
                    placeholder={email}
                  />
                </span>
              </span>
            </div>
            <div className="message message_type_text message_theme_artdoc-dark message_size_m form-field__message message__control i-bem message_js_inited" />
          </div>
          <div className="form-field form-field_type_checkbox form-field_required form-field_message_text form-field_size_m form-field_theme_artdoc-dark form__section i-bem">
            <Field
              name="term"
              type="checkbox"
              render={({ input }) => (
                <label
                  className={cx(
                    'checkbox checkbox_size_s checkbox_theme_artdoc-dark i-bem checkbox_js_inited',

                    input.checked && 'checkbox_checked'
                  )}
                >
                  <span className={cx('checkbox__box', styles.checkboxBox)}>
                    <input
                      className="checkbox__control i-bem checkbox__control_js_inited"
                      type="checkbox"
                      {...input}
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
              )}
            />
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
);
