import React, { useState, useEffect } from 'react';
import { Button } from '../button/Button';
import styles from './selectDonation.css';
import axios from 'axios';
import { CustomDonataion } from '../customDonation';
import { useTranslatedContent, withLanguages } from '../../../i18n';
import { support as supportContent } from '../../../../translations/support';

export const SelectDonation = withLanguages(() => {
  const {
    donations,
    currency,
    customDonationPlaceholder
  } = useTranslatedContent(supportContent);

  const [form, setForm] = useState(null);
  const [donation, setDonation] = useState(0);

  useEffect(() => {
      axios.get(
      'https://js.braintreegateway.com/web/dropin/1.4.0/js/dropin.min.js'
    ).then(console.log);
  });

  return (
    <div className={styles.selectDonation}>
      {donations.map(price => (
        <Button
          active={`${donation}` === `${price}`}
          onClick={() => setDonation(price)}
          key={price}
          price={price}
          currency={currency}
        />
      ))}
      <CustomDonataion
        onChange={e => setDonation(e.target.value)}
        placeholder={customDonationPlaceholder}
      />
    </div>
  );
});
