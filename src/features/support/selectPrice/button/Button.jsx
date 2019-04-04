import React from 'react';
import styles from "./button.css";


export const Button = ({price}) => <button type="button" className={styles.button}>{price}</button>
