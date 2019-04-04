import React from 'react';
import styles from "./button.css";


export const Button = ({price, currency}) =>
<button type="button" className={styles.button}>
{price} {currency}
</button>
