// ModalChat.tsx
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import style from "./style.module.scss";
import { DialogData } from "../../entities/dialog/types";
import ModalBack from "../modalBack";
import ChatMessage from "./ui/ChatMessage";

interface CreateGoalModalProps {
    onClose: () => void;
    isOpen: boolean;
    dialog: DialogData | null;
}

const ModalChat = ({ onClose, isOpen, dialog }: CreateGoalModalProps) => {
    return (
        <ModalBack isOpen={isOpen} onClose={onClose}>
            <div className={style.modal} style={{ borderRadius: "24px" }}>
                <div className={style.closeWrap} onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} className={style.closeIcon} />
                </div>
                {dialog && (
                    <div>
                        <div className={style.title}>Dialog ID: {dialog.id}</div>
                        <div className={style.chatContainer}>
                            {dialog.chatMessages.map((message, index) => (
                                <ChatMessage
                                    key={index}
                                    sender={message.sender}
                                    message={message.message}
                                    dateTime={message.dateTime}
                                />
                            ))}
                        </div>
                        <div className={style.bottomPadding}/>
                    </div>
                )}
            </div>
        </ModalBack>
    );
};

export default ModalChat;
