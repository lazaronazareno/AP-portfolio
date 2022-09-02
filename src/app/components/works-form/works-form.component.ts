import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyect } from 'src/app/porfolio-models';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UploadImgService } from 'src/app/services/upload-img.service';

@Component({
  selector: 'app-works-form',
  templateUrl: './works-form.component.html',
  styleUrls: ['./works-form.component.scss']
})
export class WorksFormComponent implements OnInit {
  form : FormGroup;
  response: string | undefined | Proyect;
  error : string | undefined;
  id:null | undefined | string;

  constructor(private formbuilder : FormBuilder, private imgbbService:UploadImgService,
    private portfolioService : PortfolioService, private route:Router, private actRoute : ActivatedRoute) {
    this.form=this.formbuilder.group(
      {
        name:[null, [Validators.required]],
        description:[null, [Validators.required]],
        stack:[null, [Validators.required]],
        year_made:[null, [Validators.required]],
        photo_url:[null, [Validators.required]],
        repo_url:[null, [Validators.required]],
        deploy_url:[null, [Validators.required]],
      }
      )
    }
    
    get Name(){
      return this.form.get('name');
    }
    get Description(){
      return this.form.get('description');
    }
    get Stack(){
      return this.form.get('stack');
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
      this.id = this.actRoute.snapshot.paramMap.get('id')
      console.log('id',this.id)
    }
    
    onSend(e:Event){
      e.preventDefault;
      console.log(this.form)
      this.portfolioService.postProyect(this.form.value).subscribe({
        next : (data) => {
          console.log('post proyect', data);
          this.response = data;
          this.route.navigate(['/portfolio']);
        },
        error: (error) => {
          console.log('post proyect failed', error);
          this.error = error;
        }
      })
    }
  
    onUpdated(e:Event) {
      e.preventDefault;
      console.log(this.form)
      this.portfolioService.putProyect(this.id, this.form.value).subscribe({
        next : (data) => {
          console.log('proyect updated', data);
          this.response = data;
          this.route.navigate(['/portfolio']);
        },
        error: (error) => {
          console.log('proyect updated failed', error);
          this.error = error;
        }
      })
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
