import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadImgService {
  private readonly url : string = 'https://api.imgbb.com/1';
  private readonly key : string = '60c12101d0e954516af4b57d07ac45cd';

  httpOptions = {
    headers: new HttpHeaders().set('X-Skip-Interceptor', ''),
    params : {key:this.key}
  };

  constructor(private httpclient:HttpClient) { }

  InterceptorSkipHeader = new HttpHeaders({'X-Skip-Interceptor' : ''})

  uploadImg(file : File):Observable<any> {
    const formData = new FormData();
    formData.append('image', file);
    
    return this.httpclient.post(this.url + '/upload', formData, this.httpOptions).pipe(map(data=>{
      console.log(data);
      return data;
      })
    );
  }
}
