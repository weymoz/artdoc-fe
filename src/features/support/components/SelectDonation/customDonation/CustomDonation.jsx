import React, { forwardRef } from 'react';
import styles from './customDonation.css';

export const CustomDonataion = forwardRef(({ placeholder, onChange }, ref) => (
  <input
    ref={ref}
    placeholder={placeholder}
    className={styles.customPrice}
    onChange={onChange}
    type="number"
  />
));
