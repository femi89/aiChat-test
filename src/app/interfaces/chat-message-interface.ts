export interface ChatMessageInterface {
  message: string,
  id: string,
  type: MessageType,
  data?: any
}
export enum MessageType {
  message = 'message',
  response = 'response'
}
