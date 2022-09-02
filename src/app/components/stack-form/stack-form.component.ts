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
  response: string | undefined;
  error : string | undefined;

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
    console.log(this.form)
    this.portfolioService.postStack(this.form.value).subscribe({
      next : (data) => {
        console.log('post stack successfull', data);
        this.response = data;
        this.route.navigate(['/portfolio']);
      },
      error: (error) => {
        console.log('stack post failed', error);
        this.error = error;
      }
    })
  }

  handleFileInput(e: Event) {
    const input = e.target as HTMLInputElement;
    const img = input.files?.item(0);
    this.imgbbService.uploadImg(img!).subscribe(url => (
      console.log(url.data.url),
      this.form.value.photo_url = url.data.url 
    ))
}

}
