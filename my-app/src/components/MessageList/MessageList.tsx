import React, { useRef, useEffect } from 'react';
import { useAppSelector } from '../../hooks/hook.ts';

import { Messages } from './messageListSlice.ts';

import { SetMessage } from './SetMessage/SetMessage.tsx';

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
      left: 0
    });
  }, [messages]);

  return (
    <div className={style.messageList} ref={ref}>
      <div className={style.messageList__wrapper}>
        <SetMessage messages={messages} />
      </div>
    </div>
  );
};

export default MessageList;
