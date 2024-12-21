import { clearSpecialChars } from './clearSpecialChars'

export const formatZipcode = (value: string) => {
  value = clearSpecialChars(value)

  return `${value.substring(0, 5)}-${value.substring(5, 8)}`
}
