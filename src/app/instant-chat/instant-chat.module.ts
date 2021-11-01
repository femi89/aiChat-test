import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatButtonComponent } from './chat-button/chat-button.component';
import {InstantChatComponent} from "./instant-chat.component";
import {InputTextModule} from "primeng/inputtext";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        ChatButtonComponent,
      InstantChatComponent
    ],
    exports: [
        ChatButtonComponent, InstantChatComponent
    ],
    imports: [
        CommonModule,
        InputTextModule,
        ReactiveFormsModule
    ]
})
export class InstantChatModule { }
