import React from 'react'

import { LanguageContext } from './LanguageContext'
import { tryOr } from '../helper/tryOr';

export const withLanguages = (Root) => {
  const lang = tryOr(() => window.location.pathname.match(/\/(.{2})\//gi)[0].slice(1, 3), 'ru')

  return () => (
    <LanguageContext.Provider value={lang}>
      <Root />
    </LanguageContext.Provider>
  )
}