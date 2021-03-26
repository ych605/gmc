export enum MessageContentType {
  TEXT = 'text',
  IMAGE = 'image',
  ATTACHMENT = 'attachment'
}

enum MessageSenderType {
  AGENT = 'agent',
  USER = 'user'
}

interface CommonMessage<ContentType extends MessageContentType, ContentKey extends string> {
  id: string
  content: { 
    [key in ContentKey]: string
  }
  contentType: ContentType[keyof ContentType]
  senderType: MessageSenderType[keyof MessageSenderType]
  createdAt: number
}

export type TextMessageType = CommonMessage<MessageContentType.TEXT, 'text'>;

export type ImageMessageType = CommonMessage<MessageContentType.IMAGE, 'url'>;

export type AttachmentMessageType = CommonMessage<MessageContentType.ATTACHMENT, 'file'>;

export type MessageType = TextMessageType | ImageMessageType | AttachmentMessageType;