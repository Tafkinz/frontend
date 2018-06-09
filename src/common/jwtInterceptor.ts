import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {appConfig} from "../app/app.config";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`,
          Accept: 'application/json',
          ContentType: 'application/json'
        },
        url: appConfig.apiUrl + request.url,
        responseType: "json"
      });
    }
    else {
      request = request.clone({
        url: appConfig.apiUrl + request.url
      });
    }

    return next.handle(request);
  }
}
