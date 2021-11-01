import {Action} from "@ngrx/store";
import {ChatMessageInterface} from "../../interfaces/chat-message-interface";

export enum MessageActionType {
  AddNewMessage = '[message action] add new message to the list',
  AddMessageSuccess = '[message action] add new message to the list success',
  clearAllMessage = '[message action] clear all message in the list',
  initiateChat = '[message action] clear all message in the list',
}

export class clearAllMessage implements Action{
  public readonly type = MessageActionType.clearAllMessage;
}
export class AddNewMessage implements Action{
  public readonly type = MessageActionType.AddNewMessage;
  constructor(public payload: any) {}
}
export class AddMessageSuccess implements Action{
  public readonly type = MessageActionType.AddMessageSuccess;
  constructor(public payload: ChatMessageInterface) {}
}

export type MessageActions =
  | clearAllMessage
  | AddNewMessage
  | AddMessageSuccess;
