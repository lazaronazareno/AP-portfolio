import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadImgService {
  private readonly url : string = environment.imgdbUrl;
  private readonly key : string = environment.imgdbKey;

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
