import React from 'react';
import { AttachmentMessageType } from '../../../types/messages';
import useMessageContext from '../../../hooks/useMessageContext';
import logo from '../../../assets/attachment.svg';

const Attachment = () => {
  const { content: { file } } = useMessageContext() as AttachmentMessageType;
  
  return (
    <a download href={file} title={'Download attachment'} data-testid={'attachment'}>
      <div className={'attachment-message'}>
        <img src={logo} alt={''} />
        <span>{'Download Attachment'}</span>
      </div>
    </a>
  );
};

export default Attachment;