import React, { useRef, useEffect, useMemo } from 'react';
import * as dayjs from 'dayjs';
import { useAppSelector } from '../../hooks/hook.ts';

import { Messages } from './messageListSlice.ts';

import { SetMessage } from './SetMessage/SetMessage.tsx';

import { date, nowTime } from '../../utils/date.ts';
import style from './MessageList.module.scss';

const MessageList = () => {
  const messages = useAppSelector((state) => state.message.messages);

  return <MainLogics messages={messages} />;
};

const MainLogics = ({ messages }: Messages) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    el?.scrollBy({
      top: el.scrollHeight,
      left: 0,
    });
  }, [messages]);

  const arr = messages[messages.length - 1];
  console.log(arr);

  console.log(messages[0]);

  for (let i = 0; i < messages.length; i++) {
    messages[i].date === date ? 'СЕГОДНЯ' : messages[i].weekDay;
  }

  messages.map((item, i) => {
    console.log(date === item.date);
  });

  return (
    <div className={style.messageList} ref={ref}>
      <div className={style.messageList__wrapper}>
        {nowTime ? (
          <div className={style.messageList__wrapper}>
            <div className={style.date}>{arr.date !== date ? 'СЕГОДНЯ' : arr.weekDay}</div>
            <SetMessage messages={messages} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MessageList;
