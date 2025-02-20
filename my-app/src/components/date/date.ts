import * as dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import weekday from 'dayjs/plugin/weekday'
import 'dayjs/locale/ru';

dayjs.locale('ru');
dayjs.extend(isToday);
dayjs.extend(weekday)

console.log(dayjs().weekday(3).format('DD.MM.YYYY'))

const dayOfObject = dayjs().endOf('day')
console.log(dayOfObject.format('DD.MM.YYYY  '))

export const weekNumber = +dayjs().format('d');
export const weekDay = dayjs().format('dddd').toUpperCase();
export const boolToday = dayjs().isToday();
export const today = boolToday ? 'СЕГОДНЯ' : null;
export const nowDate = dayjs().format('DD.MM.YYYY');

export const date = dayjs().date()
export const hour = dayjs().hour()
export const minutes = dayjs().minute()