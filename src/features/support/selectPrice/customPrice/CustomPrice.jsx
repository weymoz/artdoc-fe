import React from 'react';
import styles from './customPrice.css';

export const CustomPrice = ({ placeholder }) => (
  <input placeholder={placeholder} className={styles.customPrice} type="number" />
);
