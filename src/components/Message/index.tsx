import React, { PropsWithChildren } from 'react';
import { MessageType } from '../../types/messages';
import DateTime from './components/DateTime';
import Text from './components/Text';
import Image from './components/Image';
import Attachment from './components/Attachment';
import { MessageContext } from '../../hooks/useMessageContext';

type MessageProps = MessageType;

const Message = (props: PropsWithChildren<MessageProps>) => {
  const { children, ...messageProps } = props;
  const { senderType } = messageProps;

  return (
    <MessageContext.Provider value={messageProps}>
      <div className={`message-container ${senderType}`} data-testid={'message'}>
        {children}
        <DateTime />
      </div>
    </MessageContext.Provider>
  );
};

Message.Text = Text;
Message.Image = Image;
Message.Attachment = Attachment;
Message.DateTime = DateTime;

export default Message;