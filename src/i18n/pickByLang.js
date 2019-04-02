import isPlainObject from 'lodash.isplainobject'
import isNull from 'lodash.isnull'
import isString from 'lodash.isstring'
import isUndefined from 'lodash.isundefined'
import mapValues from 'lodash.mapvalues'

export const pickByLang = (lang) => {
  const checkEmpty = (v) => isUndefined(v) || isNull(v)
  const checkString = (v) => isString(v) && v === lang
  const checkArray = (v) => Array.isArray(v) && v.includes(lang)

  const transformArray = (arr) => arr
    .filter(({ onlyFor }) =>
      checkEmpty(onlyFor) ||
        checkString(onlyFor) ||
          checkArray(onlyFor)
    )
    .map(pick)

  const pick = (data) => {
    if (Array.isArray(data)) {
      return transformArray(data)
    }

    if (!isPlainObject(data)) {
      return data
    }

    if (Object.keys(data).includes(lang)) {
      return data[lang]
    }

    return mapValues(data, (value) => pick(value))
  }

  return pick
}
