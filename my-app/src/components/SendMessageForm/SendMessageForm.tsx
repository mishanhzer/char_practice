import React from 'react';
import { useState } from 'react';
import { useAddDispatch } from '../../hooks/hook.ts';
import { nanoid } from 'nanoid';

import { addMessage } from '../MessageList/messageListSlice.ts';
import {  hour, minutes, date, weekNumber } from '../date/date.ts';

import styles from './SendMessageForm.module.scss'; 

const SendMessageForm = () => {
  const [text, setText] = useState<string>('');
  const dispatch = useAddDispatch();

  const onSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = {
      id: nanoid(),
      message: text,
      hour,
      minutes,
      date,
      weekNumber
    };

    dispatch(addMessage(message));
    setText('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={onSumbit} className={styles.sendForm} action="submit">
      <input
        onChange={handleChange}
        value={text}
        className={styles.sendForm__input}
        placeholder="Введите сообщение"
        type="text"
      />
    </form>
  );
};

export default SendMessageForm;
