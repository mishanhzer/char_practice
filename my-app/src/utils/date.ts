import * as dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import weekday from 'dayjs/plugin/weekday'
import isYesterday from 'dayjs/plugin/isYesterday'
import 'dayjs/locale/ru'

dayjs.locale('ru');
dayjs.extend(isToday);
dayjs.extend(weekday)
dayjs.extend(isYesterday);

export const mainDate = dayjs()
export const weekNumber = +dayjs().format('d');
export const weekDay = dayjs().locale('ru').format('dddd').toUpperCase();
export const nowDate = dayjs().format('DD.MM.YYYY');
export const yesterdayDay = dayjs().isYesterday()
console.log(yesterdayDay)

export const nowTime = dayjs().isToday()

export const testDate = dayjs().format('DD/MM/YYYY HH:mm:ss')

export const date = dayjs().date()
export const hour = dayjs().hour()
export const minutes = dayjs().minute()

export const weekEnd = dayjs().endOf('week').format('D.M.YY:H:m:s')
export const weekNow = dayjs().format('D.M.YY:H:m:s')


 



