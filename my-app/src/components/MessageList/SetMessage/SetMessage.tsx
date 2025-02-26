import React, { Fragment, useMemo } from 'react';
import * as dayjs from 'dayjs';
import isTomorrow from 'dayjs/plugin/isTomorrow';
import isYesterday from 'dayjs/plugin/isYesterday';

import { Messages, ActionPayload } from './messageListSlice.ts';
import { date, weekNumber, testDate, weekDay, nowDate, nowTime } from '../../../utils/date.ts';

import { SvgImg } from '../svgMessage/SvgImg.tsx';

import style from './SetMessage.module.scss';

const startDay = dayjs().subtract(0, 'day').startOf('day').format('DD/MM/YYYY HH:mm:ss');
console.log(startDay);

// console.log(dayjs().subtract(0, 'day').endOf('day').format('DD/MM/YYYY HH:mm:ss'));

export const SetMessage = ({ messages }: Messages) => {
  return messages.map((item: ActionPayload, i: number) => {
    const date1 = dayjs(testDate);
    const date2 = dayjs(item.testDate);

    const endDay = dayjs().endOf('day');
    const startDay = dayjs().startOf('day').format('DD/MM/YYYY HH:mm:ss');

    const asdasd =
      date > item.date || date === item.date ? (
        <div className={style.date}>{date === item.date ? 'СЕГОДНЯ' : item.weekDay}</div>
      ) : null;

    if (item && item.message.length > 0) {
      return (
        <Fragment key={i}>
          <div className={style.setMessage}>
            <div className={style.setMessage_text}>{item.message}</div>
            <div className={style.setMessage_wrapperTime}>
              <div className={style.setMessage_wrapperTime_time}>
                {item.minutes < 10
                  ? `${item.hour}:0${item.minutes}`
                  : `${item.hour}:${item.minutes}`}
              </div>
              <div className={style.setMessage_wrapperTime_img}>
                <SvgImg />
              </div>
            </div>
          </div>
        </Fragment>
      );
    } else {
      return null;
    }
  });
};
