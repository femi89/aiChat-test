import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {AddNewMessage} from "../states/messages/message.action";
import {UUID} from "angular2-uuid";
import {ChatMessageInterface, MessageType} from "../interfaces/chat-message-interface";
import {getAllMessages} from "../states/messages/messages.reducer";

@Component({
  selector: 'app-instant-chat',
  templateUrl: './instant-chat.component.html',
  styleUrls: ['./instant-chat.component.scss']
})
export class InstantChatComponent implements OnInit {
  public chatFormGroup!: FormGroup;
  private uuid!: string;
  public chatMessages!: ChatMessageInterface[];
  public messageType = MessageType;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.uuid = UUID.UUID();
    this.store.pipe(select(getAllMessages)).subscribe(res => {
      if (res && res.length >0) {
        this.chatMessages = res;
      } else {
        this.store.dispatch(new AddNewMessage({id: this.uuid, message: 'what is your name?'}))
      }
    })
    this.chatFormGroup = this.formBuilder.group({
      message: ['', Validators.required]
    })
  }

  sendMessage() {
    this.store.dispatch(new AddNewMessage({id: this.uuid, message: this.chatFormGroup.value.message}))
    this.chatFormGroup.reset();
  }
}
