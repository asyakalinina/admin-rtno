export interface ChatMessage {
    sender: string;
    message: string;
    dateTime: string;
}

export interface DialogData {
    id: number;
    startTime: string;
    lastMessageTime: string;
    company: string;
    employee: string;
    comments: string;
    chatMessages: ChatMessage[];
}