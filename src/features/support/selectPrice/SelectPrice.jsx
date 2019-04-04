import React from 'react';
import { Button } from './button/Button';
import styles from "./selectPrice.css";

const prices = [100, 300, 500, 1000, 3000, 5000]


export const SelectPrice = () => <div className={styles.selectPrice}>
  {prices.map(price => <Button key={price} price={price} />)}
</div>
