import { HttpErrorResponse } from '@angular/common/http';
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
  loading : boolean = false;
  response: string | undefined | Proyect;
  error : HttpErrorResponse | undefined;
  id:null | undefined | string;
  
  imgLoading : boolean = false;
  imgResponse: string | undefined;
  imgError : HttpErrorResponse | undefined;

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
    }
    
    onSend(e:Event){
      e.preventDefault;
      this.loading = true;
      this.portfolioService.postProyect(this.form.value).subscribe({
        next : (data) => {
          this.response = data;
          this.loading = false;
          this.route.navigate(['/']);
        },
        error: (error) => {
          this.error = error;
          this.loading = false;
        }
      })
    }
  
    onUpdated(e:Event) {
      e.preventDefault;
      this.loading = true;
      this.portfolioService.putProyect(this.id, this.form.value).subscribe({
        next : (data) => {
          this.response = data;
          this.loading = false;
          this.route.navigate(['/']);
        },
        error: (error) => {
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
