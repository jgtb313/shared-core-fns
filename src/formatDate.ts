import { format } from 'date-fns-tz'
import { ptBR } from 'date-fns/locale/pt-BR'

import { getDate } from './getDate'

export const formatDate = (value: Date | string, f = 'dd/MM/yyyy') => format(getDate(value), f, { timeZone: 'America/Sao_Paulo', locale: ptBR })
