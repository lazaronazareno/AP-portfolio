import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadImgService } from 'src/app/services/upload-img.service';

@Component({
  selector: 'app-stack-form',
  templateUrl: './stack-form.component.html',
  styleUrls: ['./stack-form.component.scss']
})
export class StackFormComponent implements OnInit {
  form:FormGroup;
  fileToUpload: File | null = null;

  constructor(private formbuilder:FormBuilder, private imgbbService: UploadImgService) {
    this.form=this.formbuilder.group(
      {
        name:['', [Validators.required]],
        img:['', [Validators.required]]
      }
    )
   }

  ngOnInit(): void {
  }

  get Name() {
    return this.form.get('name')
  }

  get Img() {
    return this.form.get('img')
  }

  onSend(e:Event){
    e.preventDefault;
    console.log(this.form)
  }

  handleFileInput(e: Event) {
    const input = e.target as HTMLInputElement;
    const img = input.files?.item(0);
    console.log(input.files?.item(0));
    this.imgbbService.uploadImg(img!).subscribe(url => (
      console.log(url.data.url),
      this.form.value.img = url.data.url 
    ))
}

}
