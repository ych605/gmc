import React from 'react';
import { ImageMessageType } from '../../../types/messages';
import useMessageContext from '../../../hooks/useMessageContext';

const Image = () => {
  const { content: { url } } = useMessageContext() as ImageMessageType;
  
  return (
    <img src={url} className={'image-message'} alt={''} data-testid={'image'} />
  );
};

export default Image;