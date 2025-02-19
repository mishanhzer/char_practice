import * as dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import 'dayjs/locale/ru';

dayjs.locale('ru');
dayjs.extend(isToday);

export const weekNumber = +dayjs().format('d');
export const weekday = dayjs().format('dddd').toUpperCase();
export const boolToday = dayjs().isToday();
export const today = boolToday ? 'СЕГОДНЯ' : null;
export const nowDate = +dayjs().format('DD.MM.YYYY');
