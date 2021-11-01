import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    request = request.clone({
      setHeaders: headers
    });
    return next.handle(request);
  }
}
