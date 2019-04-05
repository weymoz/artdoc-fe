import React from 'react';
import { Button } from '../button/Button';
import styles from './selectDonation.css';
import { CustomDonataion } from '../customDonation';
import { useTranslatedContent, withLanguages } from '../../../i18n';
import { support as supportContent } from '../../../../translations/support';

export const SelectDonation = withLanguages(({ donation, setDonation }) => {
  const {
    donations,
    currency,
    customDonationPlaceholder
  } = useTranslatedContent(supportContent);

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
