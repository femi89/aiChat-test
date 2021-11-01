import {MessageActions, MessageActionType} from "./message.action";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ChatMessageInterface} from "../../interfaces/chat-message-interface";

export interface MessagesState {
  allMessages: ChatMessageInterface[];
  loadingMessage: boolean;
}
export const initialMessageState: MessagesState = {
  allMessages: [],
  loadingMessage: false
}
export function MessageReducer(state: MessagesState = initialMessageState, action: MessageActions): MessagesState {
  switch (action.type) {
    case (MessageActionType.AddMessageSuccess): {
      const messages = state.allMessages;
      const newMessage = [...messages, action.payload];
      return {
        ...state,
        allMessages: newMessage
      }
    }
    case (MessageActionType.clearAllMessage): {
      return {
        ...state,
        allMessages: initialMessageState.allMessages
      }
    }
    default:
      return state;
  }
}
export const messageSelector = createFeatureSelector<MessagesState>('messageState');
export const getAllMessages = createSelector(messageSelector, detail=>detail.allMessages);
