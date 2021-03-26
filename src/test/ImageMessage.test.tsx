import React from 'react';
import { render } from '@testing-library/react';
import ImageMessage from '../components/Message/ImageMessage';
import { ImageMessageType } from '../types/messages';

const imageMessage = {
  content: {
    url: 'https://source.unsplash.com/random'
  },
  contentType: 'image'
} as ImageMessageType;
test('Should show the text content', () => {
  const { getByTestId } = render(<ImageMessage {...imageMessage} />);
  const messageElement = getByTestId('message');
  const imageElement = getByTestId('image');
  expect(messageElement).toContainElement(imageElement);
  expect(imageElement).toHaveAttribute('src', imageMessage.content.url);
});