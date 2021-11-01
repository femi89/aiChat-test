import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  public chatApi= environment.brainshopApi;
  constructor(
    private httpClient: HttpClient
  ) { }
  public sendMessage(id: string, message: string): Observable<any> {
    return this.httpClient.get(`${this.chatApi}uid=${id}&msg=${message}`);
  }
}
