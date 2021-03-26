import { createContext, useContext } from "react";
import { MessageType } from '../types/messages';

export const MessageContext = createContext({} as MessageType);

const useMessageContext = () => {
  const context = useContext(MessageContext);
  if (Object.keys(context).length === 0 && context.constructor === Object)
    throw new Error('Message compound components cannot be rendered outside the Message component.');
  
  return context;
};

export default useMessageContext;