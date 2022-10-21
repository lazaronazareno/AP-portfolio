import { HttpErrorResponse } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UploadImgService } from 'src/app/services/upload-img.service';

@Component({
  selector: 'app-stack-form',
  templateUrl: './stack-form.component.html',
  styleUrls: ['./stack-form.component.scss']
})
export class StackFormComponent implements OnInit {
  form:FormGroup;
  fileToUpload: File | null = null;

  loading : boolean = false;
  response: string | undefined;
  error : HttpErrorResponse | undefined;

  imgLoading : boolean = false;
  imgResponse: string | undefined;
  imgError : HttpErrorResponse | undefined;

  constructor(private formbuilder:FormBuilder, private imgbbService: UploadImgService,
     private portfolioService:PortfolioService, private route:Router) {
    this.form=this.formbuilder.group(
      {
        name:[null, [Validators.required]],
        photo_url:[null, [Validators.required]]
      }
    )
   }

  ngOnInit(): void {
  }

  get Name() {
    return this.form.get('name')
  }

  get Img() {
    return this.form.get('photo_url')
  }

  onSend(e:Event){
    e.preventDefault;
    this.loading = true;
    console.log(this.form)
    this.portfolioService.postStack(this.form.value).subscribe({
      next : (data) => {
        console.log('post stack successfull', data);
        this.response = data;
        this.loading = false;
        this.route.navigate(['/portfolio']);
      },
      error: (error) => {
        console.log('stack post failed', error);
        this.error = error;
        this.loading = false;
      }
    })
  }

  handleFileInput(e: Event) {
    this.imgLoading = true;
    const input = e.target as HTMLInputElement;
    const img = input.files?.item(0);
    this.imgbbService.uploadImg(img as File).subscribe({
      next: (url) => {
        console.log(url.data.url),
        this.form.value.photo_url = url.data.url 
        this.imgResponse = `Imagen subida correctamente`
        this.imgLoading = false;
      },
      error: (error) => {
        this.imgError = error
        this.imgLoading = false;
      },
    })
}

}
