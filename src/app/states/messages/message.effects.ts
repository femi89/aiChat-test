import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AddMessageSuccess, AddNewMessage, MessageActionType} from "./message.action";
import {select, Store} from "@ngrx/store";
import {catchError, map, switchMap, take, withLatestFrom} from "rxjs/operators";
import {getAllMessages} from "./messages.reducer";
import {ChatServiceService} from "../../services/chat-service.service";
import {EMPTY, Observable} from "rxjs";
import {MessageType} from "../../interfaces/chat-message-interface";

@Injectable()
export class MessageEffects {
  constructor(
    private messageService: ChatServiceService,
    private actions: Actions,
    private store: Store
  ) {}
  public addMessage = createEffect((): Observable<any> =>
  this.actions.pipe(
    ofType<AddNewMessage>(MessageActionType.AddNewMessage),
    withLatestFrom(this.store.pipe(select(getAllMessages))),
    switchMap(([action, messages]) => {
      const message = action.payload.message;
      const id = action.payload.id;
      this.store.dispatch(new AddMessageSuccess({message , id, type: MessageType.message}))
      return this.messageService.sendMessage(id, action.payload.message).pipe(
        take(1),
        map(res => {
          console.log(res)
          if(res) {
            this.store.dispatch(new AddMessageSuccess({message: 'success' , id, type: MessageType.response}))
          }
          return EMPTY;
        }, catchError(err => {
          console.log(err)
          this.store.dispatch(new AddMessageSuccess({message: 'success' , id, type: MessageType.response}))
          return EMPTY;
        }))
      )
    })
  )
  )
}
