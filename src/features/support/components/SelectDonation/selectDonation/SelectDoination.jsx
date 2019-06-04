import React, { useRef } from 'react'
import { Button } from '../button/Button'
import styles from './selectDonation.css'
import { Field } from 'react-final-form'
import { CustomDonataion } from '../customDonation'
import { useTranslatedContent, withLanguages } from '../../../../i18n'
import { support as supportContent } from '../../../../../translations/support'
import { ErrorMessage } from '../../ErrorMessage'
import { donations, minimalDonation } from './donations'

export const SelectDonation = withLanguages(
  ({ translation: { pay }, currency, currencyLang }) => {
    const {
      customDonationPlaceholder,
      validationErrors
    } = useTranslatedContent(supportContent)
    const customDonation = useRef(null)

    return (
      <Field
        name="donation"
        render={({ input, meta }) => (
          <div className="card-ticket__content">
            <div className={styles.selectDonation}>
              {donations[currencyLang].map(price => (
                <Button
                  active={`${input.value}` === `${price}`}
                  onClick={() => {
                    input.onChange({ target: { value: price } })
                    customDonation.current.value = ''
                  }}
                  key={price}
                  price={price}
                  currency={currency}
                />
              ))}
              <CustomDonataion
                ref={customDonation}
                onChange={input.onChange}
                placeholder={customDonationPlaceholder}
              />
            </div>
            <span className={styles.payNote}>{pay}</span>
            {meta.submitError && (
              <ErrorMessage>
                {validationErrors.donation} {minimalDonation[currencyLang]}
              </ErrorMessage>
            )}
          </div>
        )}
      />
    )
  }
)
