import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadImgService } from 'src/app/services/upload-img.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  form : FormGroup;

  constructor(private formbuilder : FormBuilder, private imgbbService:UploadImgService) {
    this.form=this.formbuilder.group(
      {
        name:['', [Validators.required]],
        profileImg:['', [Validators.required]],
        backgroundImg:['', [Validators.required]],
        position:['', [Validators.required]],
        ubication:['', [Validators.required]],
        about:['', [Validators.required]],
      }
    )
   }

  ngOnInit(): void {
  }

  onSend(e:Event){
    e.preventDefault;
    console.log(this.form)
  }

  handleProfileFileInput(e: Event) {
    const input = e.target as HTMLInputElement;
    const img = input.files?.item(0);
    console.log(input.files?.item(0));
    this.imgbbService.uploadImg(img!).subscribe(url => (
      console.log(url.data.url),
      this.form.value.profileImg = url.data.url 
    ))
}
  handleBackgroundFileInput(e: Event) {
    const input = e.target as HTMLInputElement;
    const img = input.files?.item(0);
    console.log(input.files?.item(0));
    this.imgbbService.uploadImg(img!).subscribe(url => (
      console.log(url.data.url),
      this.form.value.backgroundImg = url.data.url 
    ))
}

  get Name(){
    return this.form.get('name');
  }
  get ProfileImg(){
    return this.form.get('profileImg');
  }
  get BackgroundImg(){
    return this.form.get('backgroundImg');
  }
  get Position(){
    return this.form.get('position');
  }
  get Ubication(){
    return this.form.get('ubication');
  }
  get About(){
    return this.form.get('about');
  }

}
