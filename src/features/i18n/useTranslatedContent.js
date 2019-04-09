import { useContext, useCallback } from 'react'
import { pickByLang } from 'pick-by-lang'

import { LanguageContext } from './LanguageContext'

export const useTranslatedContent = (content) => {
  const lang = useContext(LanguageContext)

  const pick = useCallback(pickByLang(lang), [lang])

  return pick(content)
}