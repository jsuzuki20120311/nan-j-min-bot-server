import { MessageType } from "./message-type";

export interface Message {
    id?: number;
    type: MessageType;
    datetime?: string;
    value: string;
    author: string;
}
