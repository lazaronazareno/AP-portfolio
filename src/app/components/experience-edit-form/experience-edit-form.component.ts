import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadImgService } from 'src/app/services/upload-img.service';

@Component({
  selector: 'app-experience-edit-form',
  templateUrl: './experience-edit-form.component.html',
  styleUrls: ['./experience-edit-form.component.scss']
})
export class ExperienceEditFormComponent implements OnInit {
  form : FormGroup;
  constructor(private formbuilder : FormBuilder, private imgbbService:UploadImgService) {
    this.form=this.formbuilder.group(
      {
        name:['', [Validators.required]],
        company:['', [Validators.required]],
        description:['', [Validators.required]],
        photo_url:[''],
        mode:[''],
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

  get Company() {
    return this.form.value('company')
  }

  get Description() {
    return this.form.value('description')
  }

  get Photo_url() {
    return this.form.value('photo_url')
  }

  get Mode() {
    return this.form.value('mode')
  }

  get Year_init() {
    return this.form.value('year_init')
  }

  get Year_end() {
    return this.form.value('year_end')
  }

}
