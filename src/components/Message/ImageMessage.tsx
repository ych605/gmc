import React from 'react';
import { ImageMessageType } from '../../types/messages';
import Message from './index';

const ImageMessage = (props: ImageMessageType) => (
  <Message {...props}>
    <Message.Image />
  </Message>
);

export default ImageMessage;