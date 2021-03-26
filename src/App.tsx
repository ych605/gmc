import React, { useEffect, useState } from 'react';
import './App.css';
import conversationData from './fixtures/conversation'; // Conversation Data
import { MessageType } from './types/messages';
import Conversation from './components/Conversation';

const App = () => {
  const [conversationMessages, setConversationMessages] = useState([] as MessageType[]);

  useEffect(() => {
    setConversationMessages(conversationData);
  }, []);

  return (
    <div className={'App'}>
      <h1>{'Generic Message Component Challenge'}</h1>
      <Conversation messages={conversationMessages} />
    </div>
  );
};

export default App;
