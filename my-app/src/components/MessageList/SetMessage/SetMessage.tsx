import React, { Fragment } from 'react';

import { Messages, ActionPayload } from './messageListSlice.ts';
import { weekDay, nowDate, date } from '../../../utils/date.ts';

import { SvgImg } from '../svgMessage/SvgImg.tsx';

import style from './SetMessage.module.scss';

export const SetMessage = ({ messages }: Messages) => {
  return messages.map((item: ActionPayload, i: number) => {
    if (item && item.message.length > 0) {
      const testik = item.boolToday ? (
        <div className={style.date}>
          {item.boolToday
            ? 'СЕГОДНЯ'
            : date !== item.date && item.weekNumber < 7
              ? weekDay
              : nowDate}
        </div>
      ) : null;
      return (
        <Fragment key={i}>
          {testik}
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
