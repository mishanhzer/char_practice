import React from 'react';
import * as dayjs from 'dayjs';

import AppHeader from '../appHeader/AppHeader.tsx';
import SendMessageForm from '../SendMessageForm/SendMessageForm.tsx';
import MessageList from '../MessageList/MessageList.tsx';

import style from './App.module.scss';

dayjs.locale('ru');

const App = () => {
  return (
    <div className={style.app}>
      <AppHeader />
      <MessageList />
      <SendMessageForm />
    </div>
  );
};

export default App;
