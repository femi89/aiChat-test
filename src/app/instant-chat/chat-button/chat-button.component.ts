import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-button',
  templateUrl: './chat-button.component.html',
  styleUrls: ['./chat-button.component.scss']
})
export class ChatButtonComponent implements OnInit {
  showChat = false;
  actionButtonLabel!: string;
  chatClass!: string;
  constructor() { }
  ngOnInit(): void {
    this.hide();
  }

  toggleChatDisplay() {
    this.showChat ? this.hide() : this.show();
  }
  public show():void {
    this.chatClass = 'fadeInUpBig'
    this.showChat = true;
    this.actionButtonLabel = 'hide';
  }
  public hide():void {
    this.chatClass = 'fadeOutDownBig';
    setTimeout(() => {

      this.showChat = false;
    }, 200);
    this.actionButtonLabel = 'talk to us'
  }
}
