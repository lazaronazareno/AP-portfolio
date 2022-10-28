import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url= environment.backendUrl;
  currentUserSubject: BehaviorSubject<any>;
  clientSideError! : string;
  serverSideError! : string;

  constructor(private http:HttpClient) {
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
   }

   Login(email: string, password: string):Observable<any>{
    return this.http.post(this.url + '/authenticate', {email: email, password:password}).pipe(map(data=>{

      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data)
      return data;
      
    }))
   }

   Register(email : string, password: string):Observable<any>{
    return this.http.post(this.url + '/register', {email: email, password:password}).pipe(map(data=>{
      return data;
    }))
   }

   Logout() {
    sessionStorage.clear();
   }

   get UserAuthenticated() {
    return this.currentUserSubject.value;
   }
}
