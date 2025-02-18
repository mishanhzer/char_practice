import React from 'react';
import AppHeader from '../appHeader/AppHeader.tsx';
import SendMessageForm from '../SendMessageForm/SendMessageForm.tsx';
import MessageList from '../MessageList/MessageList.tsx';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <MessageList />
      <SendMessageForm />
    </div>
  );
};

export default App;
