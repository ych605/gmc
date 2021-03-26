import React from 'react';
import { render } from '@testing-library/react';
import TextMessage from '../components/Message/TextMessage';
import { TextMessageType } from '../types/messages';

const textMessage = {
  content: {
    text: 'text message'
  },
  contentType: 'text'
} as TextMessageType;
test('Should show the text content', () => {
  const { getByTestId } = render(<TextMessage {...textMessage} />);
  const messageElement = getByTestId('message');
  const textElement = getByTestId('text');
  expect(messageElement).toContainElement(textElement);
  expect(textElement).toContainHTML(textMessage.content.text);
});