import React from 'react';
import { TextMessageType } from '../../types/messages';
import Message from './index';

const TextMessage = (props: TextMessageType) => (
  <Message {...props}>
    <Message.Text />
  </Message>
);

export default TextMessage;