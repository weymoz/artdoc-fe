import { useContext, useCallback } from 'react'

import { LanguageContext } from './LanguageContext'
import { pickByLang } from './pickByLang';

export const useTranslatedContent = (content) => {
  const lang = useContext(LanguageContext)

  const pick = useCallback(pickByLang(lang), [lang])

  return pick(content)
}