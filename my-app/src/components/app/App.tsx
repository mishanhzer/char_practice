import React from 'react';
import AppHeader from '../appHeader/AppHeader.tsx';
import SendMessageForm from '../SendMessageForm/SendMessageForm.tsx';
import MessageList from '../MessageList/MessageList.tsx';

import style from './App.module.scss';

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
