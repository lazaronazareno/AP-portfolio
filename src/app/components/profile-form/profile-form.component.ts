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
        lastName:['', [Validators.required]],
        nationality:['', [Validators.required]],
        tel:['', [Validators.required]],
        address:['', [Validators.required]],
        mail:['', [Validators.required]],
        about_me:['', [Validators.required]],
        ocupation:['', [Validators.required]],
        photo_url:['', [Validators.required]],
        background_url:['', [Validators.required]],
        repo_url:['', [Validators.required]],
        linkedin_url:['', [Validators.required]],
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
      this.form.value.photo_url = url.data.url 
    ))
}
  handleBackgroundFileInput(e: Event) {
    const input = e.target as HTMLInputElement;
    const img = input.files?.item(0);
    console.log(input.files?.item(0));
    this.imgbbService.uploadImg(img!).subscribe(url => (
      console.log(url.data.url),
      this.form.value.background_url = url.data.url 
    ))
}

  get Name(){
    return this.form.get('name');
  }
  get LastName(){
    return this.form.get('lastName');
  }
  get Nationality(){
    return this.form.get('nationality');
  }
  get Tel(){
    return this.form.get('tel');
  }
  get Address(){
    return this.form.get('address');
  }
  get Mail(){
    return this.form.get('mail');
  }
  get Ocupation(){
    return this.form.get('ocupation');
  }
  get ProfileImg(){
    return this.form.get('photo_url');
  }
  get BackgroundImg(){
    return this.form.get('background_url');
  }
  get About(){
    return this.form.get('about_me');
  }
  get RepoUrl(){
    return this.form.get('repo_url');
  }
  get LinkedinUrl(){
    return this.form.get('linkedin_url');
  }

}
