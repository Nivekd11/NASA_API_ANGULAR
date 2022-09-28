import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';

@Injectable()
export class SearchInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
     
      //const TOKEN: string = this.auth.token
    
        const API_KEY_REQUEST : HttpRequest< any> = request.clone({
          url: request.url.concat("&api_key="+localStorage.getItem("api_key")),
          //headers: request.headers.set('Authorization',`Bearer ${TOKEN}`)
        })
        console.log("RESPONSE",API_KEY_REQUEST)
        return next.handle(API_KEY_REQUEST); 
    
  }
}
