import React, { useCallback, useState } from "react";
import "./App.css";
import { MessageType } from "./types/messages";
import conversationData from "./fixtures/conversation"; // Conversation Data
import Conversation from "./components/Conversation";
import ReplyBox from "./components/Conversation/ReplyBox";

const App = () => {
  const [conversationMessages, setConversationMessages] = useState(
    conversationData as MessageType[]
  );

  const onSend = useCallback(
    (message: MessageType) => {
      setConversationMessages((prevConversationMessages) => [
        message,
        ...prevConversationMessages,
      ]);
    },
    [setConversationMessages]
  );

  return (
    <div className={"App"}>
      <h1>{"Generic Message Component"}</h1>
      <Conversation messages={conversationMessages} />
      <ReplyBox onSend={onSend} />
    </div>
  );
};

export default App;
