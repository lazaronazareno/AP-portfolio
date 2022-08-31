import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadImgService } from 'src/app/services/upload-img.service';

@Component({
  selector: 'app-work-edit-form',
  templateUrl: './work-edit-form.component.html',
  styleUrls: ['./work-edit-form.component.scss']
})
export class WorkEditFormComponent implements OnInit {
  form : FormGroup;

  constructor(private formbuilder : FormBuilder, private imgbbService:UploadImgService) {
    this.form=this.formbuilder.group(
      {
        name:['', [Validators.required]],
        description:['', [Validators.required]],
        year_made:['', [Validators.required]],
        photo_url:['', [Validators.required]],
        repo_url:['', [Validators.required]],
        deploy_url:['', [Validators.required]],
      }
      )
    }
    
    get Name(){
      return this.form.get('name');
    }
    get Description(){
      return this.form.get('description');
    }
    get Year_made(){
      return this.form.get('year_made');
    }
    get Photo_url(){
      return this.form.get('photo_url');
    }
    get Repo_url(){
      return this.form.get('repo_url');
    }
    get Deploy_url(){
      return this.form.get('deploy_url');
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
}
