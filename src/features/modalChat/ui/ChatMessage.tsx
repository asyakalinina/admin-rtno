import React from "react";
import style from "./style.module.scss";

interface ChatMessageProps {
    sender: string;
    message: string;
    dateTime: string;
}

const ChatMessage = ({ sender, message, dateTime }: ChatMessageProps) => {
    const isBot = sender.toLowerCase() === "bot";

    return (
        <div className={`${style.message} ${isBot ? style.botMessage : style.userMessage}`}>
            <div className={style.sender}>{sender}</div>
            <div className={style.messageText}>{message}</div>
            <div className={style.dateTime}>{dateTime}</div>
        </div>
    );
};

export default ChatMessage;


