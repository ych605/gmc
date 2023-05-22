import React, { FormEventHandler, useCallback, useRef } from "react";
import { MessageType } from "../../types/messages";

interface ReplyBoxProps {
  onSend: (message: MessageType) => void;
}

const ReplyBox: React.FC<ReplyBoxProps> = (props) => {
  const { onSend } = props;
  const replyInputRef = useRef<HTMLInputElement>(null);

  const onSendSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    (e) => {
      e.preventDefault();
      if (!replyInputRef.current) return false;

      const messageContent = (replyInputRef.current.value || "").trim();

      replyInputRef.current.value = "";

      if (!messageContent) return;

      const createdAt = Date.now();
      onSend({
        id: `${createdAt}`,
        content: {
          text: messageContent,
        },
        contentType: "text",
        senderType: "agent",
        createdAt: createdAt / 1000,
      });
    },
    [onSend]
  );

  return (
    <form onSubmit={onSendSubmit} className={"reply-box"}>
      <input ref={replyInputRef} className={"reply-input"} />
      <button className={"reply-button"}>{"Send"}</button>
    </form>
  );
};

export default ReplyBox;
