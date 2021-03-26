import React from 'react';
import { TextMessageType } from '../../../types/messages';
import useMessageContext from '../../../hooks/useMessageContext';

const Text = () => {
  const { content: { text } } = useMessageContext() as TextMessageType;
  
  return (
    <span className={'text-message'} data-testid={'text'}>{text}</span>
  );
};

export default Text;