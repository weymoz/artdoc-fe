import React from 'react';
import styles from './customDonation.css';

export const CustomDonataion = ({ placeholder, onChange }) => (
  <input placeholder={placeholder} className={styles.customPrice} onChange={onChange} type="number" />
);
