import React from 'react';
import styles from './customDonation.css';

export const CustomDonataion = ({ placeholder }) => (
  <input placeholder={placeholder} className={styles.customPrice} type="number" />
);
