import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  InterceptorSkip = 'X-Skip-Interceptor'

  constructor(private authService:AuthService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    var currentUser= this.authService.UserAuthenticated;
    if (req.headers && req.headers.has(this.InterceptorSkip)) {
      const headers = req.headers.delete(this.InterceptorSkip);
      return next.handle(req.clone({ headers }));
    }
    if(currentUser && currentUser.token){
      req=req.clone({
        setHeaders:{
          Authorization : `Bearer ${currentUser.token}`,
        }
      })
    }
    return next.handle(req)
  }
}
