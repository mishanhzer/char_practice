import React, { Fragment } from 'react';
import * as dayjs from 'dayjs';

import { Messages, ActionPayload } from './messageListSlice.ts';
import { date, weekNumber, testDate, weekDay, nowDate } from '../../../utils/date.ts';

import { SvgImg } from '../svgMessage/SvgImg.tsx';

import style from './SetMessage.module.scss';

export const SetMessage = ({ messages }: Messages) => {
  return messages.map((item: ActionPayload, i: number) => {
    const date1 = dayjs(testDate);
    const date2 = dayjs(item.testDate);

    if (date2.isSame(date1)) {
      console.log('СЕГОДНЯ');
    } else if (date1.diff(date2, 'day') > 0) {
      console.log(weekDay);
    } else if (date1.diff(date2, 'day') > 7) {
      console.log(nowDate);
    }

    const time = date2.isSame(date1) ? (
      <div className={style.date}>
        {date2.isSame(date1)
          ? 'СЕГОДНЯ'
          : date1.diff(date2, 'day') > 0
            ? weekDay
            : date1.diff(date2, 'day') > 7
              ? nowDate
              : ''}
      </div>
    ) : (
      <div className={style.date}>
        {date1.diff(date2, 'day') > 0 ? weekDay : date1.diff(date2, 'day') > 7 ? nowDate : ''}
      </div>
    );

    if (item && item.message.length > 0) {
      const today = date === item.date ? <div className={style.date}>{'СЕГОДНЯ'}</div> : null;
      const weekdayNow =
        date !== item.date && weekNumber < 7 ? (
          <div className={style.date}>{item.weekDay}</div>
        ) : null;

      return (
        <Fragment key={i}>
          {time}
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
