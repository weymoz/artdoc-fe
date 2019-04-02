import React from "react";
import {render} from "react-dom";

import { withLanguages, useTranslatedContent } from './i18n'
import { support as supportContent } from './translations/support'

export const Support = withLanguages(() => {
  const { title } = useTranslatedContent(supportContent)

  return <h1>{title}</h1>
})

const container = document.getElementById('support-page-react-root')
if (!!container) {
  render(<Support />, container)
}
