import * as dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import weekday from 'dayjs/plugin/weekday'
import 'dayjs/locale/ru'

dayjs.locale('ru');
dayjs.extend(isToday);
dayjs.extend(weekday)

export const mainDate = dayjs()
export const weekNumber = +dayjs().format('d');
export const weekDay = dayjs().locale('ru').format('dddd').toUpperCase();
export const nowDate = dayjs().format('DD.MM.YYYY');

export const testDate = dayjs().format('YYYY-MM-D,H:m:s')

export const date = dayjs().date()
export const hour = dayjs().hour()
export const minutes = dayjs().minute()

export const weekEnd = dayjs().endOf('week').format('D.M.YY:H:m:s')
export const weekNow = dayjs().format('D.M.YY:H:m:s')


 



