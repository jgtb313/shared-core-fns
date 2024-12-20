import { toZonedTime } from 'date-fns-tz'

export const getDate = (date: string | Date) => {
  console.log(toZonedTime(date, 'America/Sao_Paulo'))
  return toZonedTime(date, 'America/Sao_Paulo')
}
