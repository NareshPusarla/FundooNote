import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../authentication/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  token:any;
  constructor(private injector: Injector) { 
    this.token = localStorage.getItem('token')
  }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authService = this.injector.get(AuthserviceService)
    let tokenReq = req.clone({
      setHeaders: {
        // Authorization:`Token ${authService.getToken()}`
        Authorization: this.token
      }
    })
    return next.handle(tokenReq);
  }
}
