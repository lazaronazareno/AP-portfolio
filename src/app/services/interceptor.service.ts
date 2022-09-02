import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authService:AuthService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    var currentUser= this.authService.UserAuthenticated;
    if(currentUser && currentUser.token){
      req=req.clone({
        setHeaders:{
          Authorization : `Bearer ${currentUser.token}`,
        }
      })
    }
    console.log("Interceptor running..." + JSON.stringify(currentUser));
    return next.handle(req)
  }
}
