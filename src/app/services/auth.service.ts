import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, EMPTY, throwError } from 'rxjs';
import { map } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="http://localhost:8080";
  currentUserSubject: BehaviorSubject<any>;
  clientSideError : string | undefined;
  serverSideError : string | undefined;

  constructor(private http:HttpClient) {
    console.log("auth service running")
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
   }

   Login(email: string, password: string):Observable<any>{
    return this.http.post(this.url + '/authenticate', {email: email, password:password}).pipe(map(data=>{

      sessionStorage.setItem('currentUser', JSON.stringify(data));
      console.log(this.currentUserSubject)
      console.log(JSON.stringify(this.currentUserSubject))
      this.currentUserSubject.next(data)
      return data;
      
    }),
    catchError((error: HttpErrorResponse) => {
      if (error.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
        this.clientSideError = 'An error occurred:', error.error.message;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(`Backend returned code ${error.status}, body was: ${error.error.errors[0]}`);
        this.serverSideError = `Backend returned code ${error.status}, body was: ${error.error[0]}`;
      }

      // If you want to return a new response:
      //return of(new HttpResponse({body: [{name: "Default value..."}]}));

      // If you want to return the error on the upper level:
      return throwError(error);

      // or just return nothing:
      // return EMPTY;
    }))
   }

   Register(email : string, password: string):Observable<any>{
    return this.http.post(this.url + '/register', {email: email, password:password}).pipe(map(data=>{
      return data;
    }))
   }

   get UserAuthenticated() {
    return this.currentUserSubject.value;
   }
}
