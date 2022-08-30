import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadImgService {
  private readonly url : string = 'https://api.imgbb.com/1';
  private readonly key : string = '60c12101d0e954516af4b57d07ac45cd';

  constructor(private httpclient:HttpClient) { }

  uploadImg(file : File):Observable<any> {
    const formData = new FormData;

    formData.append('image', file);
    return this.httpclient.post(this.url + '/upload', formData, {params : {key:this.key}}).pipe(map(data=>{
      console.log(data);
      return data;
      })
    );
  }
}
