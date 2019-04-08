import React from 'react';
import { render } from 'react-dom';
import { withLanguages } from '../i18n/withLanguages';
import { useTranslatedContent } from '../i18n';
import { translations } from '../../translations/thanksSupport';

export const ThanksSupport = withLanguages(() => {
  const { thanks } = useTranslatedContent(translations);

  return (
    <div className="page__content page__content_width_narrow page__content_gap_bottom">
      <h1 className="page__title page__title_size_xxl heading heading_align_center heading_caps font font_family_helvetica-neue-condensed-bold font_loaded">
        {thanks}
      </h1>
      <br />
    </div>
  );
});

const container = document.getElementById('thanks-support-page-react-root');
if (container) {
  render(<ThanksSupport />, container);
}
