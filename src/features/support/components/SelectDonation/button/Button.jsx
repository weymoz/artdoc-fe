import React from 'react';
import cx from 'classnames';
import styles from './button.css';

export const Button = ({ price, currency, onClick, active }) => (
  <button
    onClick={onClick}
    type="button"
    className={cx(styles.button, active && styles.active)}
  >
    {price} {currency}
  </button>
);
