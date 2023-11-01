import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const api_key='weqjduwge16gw21'
    const role_KEY="1234567ygdrssrd"
    return next.handle(request.clone({setHeaders:{api_key,role_KEY}}));
  }
}
