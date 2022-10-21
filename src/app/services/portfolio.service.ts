import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Experience, Person, Proyect, Stack, Study } from '../porfolio-models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string = "https://argentina-programa-back-end.herokuapp.com"

  constructor(
    private http : HttpClient,
    private authService : AuthService
  ) {
  }
  httpOptions = {
    headers: new HttpHeaders().set(
      'Authorization', this.authService.UserAuthenticated.token,
    ).set('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE')
  };

  getProfile(): Observable<any> {
    return this.http.get<Person>(this.url + '/person', this.httpOptions)
  }

  postProfile(person : Person): Observable<string> {
    return this.http.post<string>(this.url + '/person', person, this.httpOptions)
  }

  putProfile(person : Person): Observable<Person> {
    return this.http.put<Person>(this.url + '/person', person, this.httpOptions)
  }
  
  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.url + '/experience', this.httpOptions)
  }

  getExperienceById(experience : Experience): Observable<Experience> {
    const newUrl = `${this.url}/experience/${experience.id}`
    return this.http.get<Experience>(newUrl, this.httpOptions)
  }

  postExperience(exp : Experience): Observable<string> {
    return this.http.post<string>(this.url + '/experience', exp, this.httpOptions)
  }

  putExperience(id : string | undefined | null, exp : Experience): Observable<Experience> {
    const newUrl = `${this.url}/experience/${id}`
    return this.http.put<Experience>(newUrl, exp, this.httpOptions)
  }

  deleteExperience(experience : Experience): Observable<string> {
    const newUrl = `${this.url}/experience/${experience.id}`
    return this.http.delete<string>(newUrl, this.httpOptions)
  }

  getStack(): Observable<Stack[]> {
    return this.http.get<Stack[]>(this.url + '/stack', this.httpOptions)
  }

  getStackById(Stack : Stack): Observable<Stack> {
    const newUrl = `${this.url}/stack/${Stack.id}`
    return this.http.get<Stack>(newUrl, this.httpOptions)
  }

  postStack(stack : Stack): Observable<string> {
    return this.http.post<string>(this.url + '/stack', stack, this.httpOptions)
  }

  putStack(id: string | undefined | null, stack:Stack): Observable<Stack> {
    const newUrl = `${this.url}/stack/${id}`
    return this.http.put<Stack>(newUrl, stack, this.httpOptions)
  }

  deleteStack(Stack : Stack): Observable<string> {
    const newUrl = `${this.url}/stack/${Stack.id}`
    return this.http.delete<string>(newUrl, this.httpOptions)
  }
  
  getStudy(): Observable<Study[]> {
    return this.http.get<Study[]>(this.url + '/study', this.httpOptions)
  }

  getStudyById(Study : Study): Observable<Study> {
    const newUrl = `${this.url}/study/${Study.id}`
    return this.http.get<Study>(newUrl, this.httpOptions)
  }

  postStudy(Study : Study): Observable<string> {
    return this.http.post<string>(this.url + '/study', Study, this.httpOptions)
  }

  putStudy(id: string | undefined | null, Study:Study): Observable<Study> {
    const newUrl = `${this.url}/study/${id}`
    return this.http.put<Study>(newUrl, Study, this.httpOptions)
  }

  deleteStudy(Study : Study): Observable<string> {
    const newUrl = `${this.url}/study/${Study.id}`
    return this.http.delete<string>(newUrl, this.httpOptions)
  }

  getProyect(): Observable<Proyect[]> {
    return this.http.get<Proyect[]>(this.url + '/proyect', this.httpOptions)
  }

  getProyectById(Proyect : Proyect): Observable<Proyect> {
    const newUrl = `${this.url}/proyect/${Proyect.id}`
    return this.http.get<Proyect>(newUrl, this.httpOptions)
  }

  postProyect(Proyect : Proyect): Observable<string> {
    return this.http.post<string>(this.url + '/proyect', Proyect, this.httpOptions)
  }

  putProyect(id: string | undefined | null, Proyect:Proyect): Observable<Proyect> {
    const newUrl = `${this.url}/proyect/${id}`
    return this.http.put<Proyect>(newUrl, Proyect, this.httpOptions)
  }

  deleteProyect(Proyect : Proyect): Observable<string> {
    const newUrl = `${this.url}/proyect/${Proyect.id}`
    return this.http.delete<string>(newUrl, this.httpOptions)
  }

}
