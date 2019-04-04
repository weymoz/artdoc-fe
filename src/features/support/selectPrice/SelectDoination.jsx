import React from 'react';
import { Button } from './button/Button';
import styles from './selectDonation.css';
import { CustomPrice } from './customPrice/CustomPrice';
import { useTranslatedContent, withLanguages } from '../../i18n';
import { support as supportContent } from '../../../translations/support';

export const SelectDonation = withLanguages(() => {
  const { donations, currency } = useTranslatedContent(supportContent);

  return (
    <div className={styles.selectDonation}>
      {donations.map(price => (
        <Button key={price} price={price} currency={currency} />
      ))}
      <CustomPrice />
    </div>
  );
});
