import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadImgService } from 'src/app/services/upload-img.service';

@Component({
  selector: 'app-study-edit-form',
  templateUrl: './study-edit-form.component.html',
  styleUrls: ['./study-edit-form.component.scss']
})
export class StudyEditFormComponent implements OnInit {
  form : FormGroup;
  constructor(private formbuilder : FormBuilder, private imgbbService:UploadImgService) {
    this.form=this.formbuilder.group(
      {
        name:['', [Validators.required]],
        school:['', [Validators.required]],
        photo_url:[''],
        year_init:['', [Validators.required, Validators.email]],
        year_end:['', [Validators.required]],
      }
      )
   }

  ngOnInit(): void {
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
      this.form.value.photo_url = url.data.url 
    ))
  }

  get Name() {
    return this.form.value('name')
  }

  get School() {
    return this.form.value('school')
  }

  get Photo_url() {
    return this.form.value('photo_url')
  }

  get Year_init() {
    return this.form.value('year_init')
  }

  get Year_end() {
    return this.form.value('year_end')
  }
}
