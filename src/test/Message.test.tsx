import React from 'react';
import { render } from '@testing-library/react';
import Message from '../components/Message';
import { MessageType } from '../types/messages';

const userMessage = {
  senderType: 'user'
} as MessageType;
test('Should display on the left if not from an `agent`', () => {
  const { getByTestId } = render(<Message {...userMessage} />);
  const messageElement = getByTestId('message');
  expect(messageElement).toHaveClass('user');
});

const agentMessage = {
  senderType: 'agent'
} as MessageType;
test('Should display on the right if from an `agent`', () => {
  const { getByTestId } = render(<Message {...agentMessage} />);
  const messageElement = getByTestId('message');
  expect(messageElement).toHaveClass('agent');
});