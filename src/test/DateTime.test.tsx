import React from 'react';
import dayjs from 'dayjs';
import { render } from '@testing-library/react';
import Message from '../components/Message';
import { MessageType } from '../types/messages';

const dateTimeMessage = {
  createdAt: 1603181031
} as MessageType;
test('Should include a readable timestamp', () => {
  const { getByTestId } = render(<Message {...dateTimeMessage} />);
  const messageElement = getByTestId('message');
  const dateTimeElement = getByTestId('datetime');
  expect(messageElement).toContainElement(dateTimeElement);
  expect(dateTimeElement).toHaveAttribute('dateTime', dayjs.unix(dateTimeMessage.createdAt).format('YYYY-MM-DD HH:mm'));
  expect(dateTimeElement).toContainHTML(dayjs.unix(dateTimeMessage.createdAt).format('MMM Do h:mm A'));
});