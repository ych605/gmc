import React from 'react';
import { render } from '@testing-library/react';
import AttachmentMessage from '../components/Message/AttachmentMessage';
import { AttachmentMessageType } from '../types/messages';

const attachmentMessage = {
  content: {
    file: 'https://drive.google.com/uc?export=download&id=1ft-mFQ8ER27jBQJrE2SGdaIsKjnl8_cu'
  },
  contentType: 'image'
} as AttachmentMessageType;
test('Should show the text content', () => {
  const { getByTestId } = render(<AttachmentMessage {...attachmentMessage} />);
  const messageElement = getByTestId('message');
  const attachmentElement = getByTestId('attachment');
  expect(messageElement).toContainElement(attachmentElement);
  expect(attachmentElement).toHaveAttribute('download');
  expect(attachmentElement).toHaveAttribute('href', attachmentMessage.content.file);
});