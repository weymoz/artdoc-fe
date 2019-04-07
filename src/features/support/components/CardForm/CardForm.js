import React from 'react';
import cx from 'classnames';
import styles from "./cardForm.css";
export const CardForm = ({ modalOpened, setModalOpened }) => (
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
        <div onClick={() => setModalOpened(false)} className={styles.overlay} />
        <div
          className={cx(
            'modal__content i-bem modal__content_js_inited',
            styles.modalContent
          )}
        >
          <form
            noValidate
            className="form form_view_payment form_theme_artdoc form_has-validation form_size_m i-bem form_js_inited"
          >
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
);
