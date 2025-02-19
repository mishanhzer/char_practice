import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import styles from './SendMessageForm.module.scss'; // добавление css модулей
import { addMessage } from '../MessageList/messageListSlice.ts';

export const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();

const SendMessageForm = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const onSumbit = (e) => {
    e.preventDefault();

    const message = {
      id: nanoid(),
      message: text,
      hours,
      minutes,
    };

    dispatch(addMessage(message));
    setText('');
  };

  const handleChange = (e) => {
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
