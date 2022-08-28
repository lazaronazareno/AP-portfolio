import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string = ""

  constructor(
    private http : HttpClient
  ) { }

  getData(): Observable<any> {
    return this.http.get('./assets/data/data.json')
  }

/*   getData(): Observable<any> {
    return this.http.get(this.url)
  } */
}
