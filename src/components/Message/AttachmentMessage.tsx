import React from 'react';
import { AttachmentMessageType } from '../../types/messages';
import Message from './index';

const AttachmentMessage = (props: AttachmentMessageType) => (
  <Message {...props}>
    <Message.Attachment />
  </Message>
);

export default AttachmentMessage;