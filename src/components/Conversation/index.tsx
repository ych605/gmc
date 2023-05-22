import React from "react";
import {
  MessageContentType,
  MessageType,
  TextMessageType,
  ImageMessageType,
  AttachmentMessageType,
} from "../../types/messages";
import TextMessage from "../Message/TextMessage";
import ImageMessage from "../Message/ImageMessage";
import AttachmentMessage from "../Message/AttachmentMessage";

interface ConversationProps {
  messages: MessageType[];
}

const Conversation = (props: ConversationProps) => {
  const { messages } = props;

  return (
    <div className={"conversation-container"}>
      <div className={"conversation-messages-list"}>
        {messages.map((message) => {
          switch (message.contentType) {
            case MessageContentType.TEXT:
              return (
                <TextMessage
                  key={message.id}
                  {...(message as TextMessageType)}
                />
              );
            case MessageContentType.IMAGE:
              return (
                <ImageMessage
                  key={message.id}
                  {...(message as ImageMessageType)}
                />
              );
            case MessageContentType.ATTACHMENT:
              return (
                <AttachmentMessage
                  key={message.id}
                  {...(message as AttachmentMessageType)}
                />
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default Conversation;
