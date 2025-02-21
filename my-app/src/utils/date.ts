import * as dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import weekday from 'dayjs/plugin/weekday'

dayjs.extend(isToday);
dayjs.extend(weekday)

export const weekNumber = +dayjs().format('d');
export const weekDay = dayjs().format('dddd').toUpperCase();
export const boolToday = dayjs().isToday();
export const nowDate = dayjs().format('DD.MM.YYYY');

export const date = dayjs().date()
export const hour = dayjs().hour()
export const minutes = dayjs().minute()