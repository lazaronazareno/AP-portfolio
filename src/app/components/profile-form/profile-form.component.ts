import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/porfolio-models';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UploadImgService } from 'src/app/services/upload-img.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  form : FormGroup;
  portfolioData : undefined | Person;
  response: string | undefined | Person;
  error : string | undefined;

  constructor(private formbuilder : FormBuilder, private imgbbService:UploadImgService,
              private portfolioService: PortfolioService, private route:Router) {
    this.form=this.formbuilder.group(
      {
        name:[null, [Validators.required]],
        lastName:[null, [Validators.required]],
        nationality:[null, [Validators.required]],
        tel:[null],
        address:[null],
        birth:[null],
        mail:[null, [Validators.required, Validators.email]],
        about_me:[null, [Validators.required]],
        ocupation:[null, [Validators.required]],
        photo_url:[null, [Validators.required]],
        background_url:[null, [Validators.required]],
        repo_url:[null, [Validators.required]],
        linkedin_url:[null, [Validators.required]],
      }
      )
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
      get Birth(){
        return this.form.get('birth');
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
    
    ngOnInit(): void {
      this.portfolioService.getProfile().subscribe(data => (
        this.portfolioData = data,
        console.log(this.portfolioData),
        console.log(this.portfolioData?.name)
      ))
    }
    
    onSend(e:Event){
      e.preventDefault;
      console.log(this.form.value)
      if(this.portfolioData?.name){
        this.portfolioService.putProfile(this.form.value).subscribe({
          next : (data) => {
            console.log('Data updated', data);
            this.response = data;
            this.route.navigate(['/portfolio']);
          },
          error: (error) => {
            console.log('data updated failed', error);
            this.error = error;
          }
        })
      } else {
        this.portfolioService.postProfile(this.form.value).subscribe({
          next : (data) => {
            console.log('post succesfull!', data);
            this.response = data;
            this.route.navigate(['/portfolio']);
          },
          error: (error) => {
            console.log('post failed', error);
            this.error = error;
          }
        })
      }
    }


    handleProfileFileInput(e: Event) {
      const input = e.target as HTMLInputElement;
      const img = input.files?.item(0);
      this.imgbbService.uploadImg(img as File).subscribe(url => (
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

}
