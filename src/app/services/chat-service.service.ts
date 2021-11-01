import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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
    const header = new HttpHeaders();
    header.set('Accept', 'application/json');
    const requestOptions = {header: header, withCredentials: true};
    return this.httpClient.get(`${this.chatApi}uid=${id}&msg=${message}`, requestOptions);
  }
}
