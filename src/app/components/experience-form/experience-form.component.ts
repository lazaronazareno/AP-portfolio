import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Experience } from 'src/app/porfolio-models';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UploadImgService } from 'src/app/services/upload-img.service';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss']
})
export class ExperienceFormComponent implements OnInit {
  form : FormGroup;
  loading : boolean = false;
  response: string | undefined | Experience;
  error : HttpErrorResponse | undefined;
  id:null | undefined | string;

  imgLoading : boolean = false;
  imgResponse: string | undefined;
  imgError : HttpErrorResponse | undefined;

  constructor(private formbuilder : FormBuilder, private imgbbService:UploadImgService,
     private portfolioService : PortfolioService, private route:Router, private actRoute : ActivatedRoute) {
    this.form=this.formbuilder.group(
      {
        position:[null, [Validators.required]],
        company:[null, [Validators.required]],
        description:[null, [Validators.required]],
        photo_url:[null],
        mode:[null],
        date_init:[null, [Validators.required]],
        date_end:[null, [Validators.required]],
      }
      )
   }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('id')
    console.log('id',this.id)
  }

  onSend(e:Event){
    e.preventDefault;
    this.loading = true;
    console.log(this.form)
    this.portfolioService.postExperience(this.form.value).subscribe({
      next : (data) => {
        console.log('post experience', data);
        this.response = data;
        this.loading = false;
        this.route.navigate(['/portfolio']);
      },
      error: (error) => {
        console.log('post experience failed', error);
        this.error = error;
        this.loading = false;
      }
    })
  }

  onUpdated(e:Event) {
    e.preventDefault;
    this.loading = true;
    console.log(this.form)
    this.portfolioService.putExperience(this.id, this.form.value).subscribe({
      next : (data) => {
        console.log('experience updated', data);
        this.response = data;
        this.loading = false;
        this.route.navigate(['/portfolio']);
      },
      error: (error) => {
        console.log('experience updated failed', error);
        this.error = error;
        this.loading = false;
      }
    })
  }

  handleFileInput(e: Event) {
    this.imgLoading = true;
    const input = e.target as HTMLInputElement;
    const img = input.files?.item(0);
    console.log(input.files?.item(0));
    this.imgbbService.uploadImg(img as File).subscribe({
      next: (url) => {
        console.log(url.data.url),
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

  get Position() {
    return this.form.get('position')
  }

  get Company() {
    return this.form.get('company')
  }

  get Description() {
    return this.form.get('description')
  }

  get Photo_url() {
    return this.form.get('photo_url')
  }

  get Mode() {
    return this.form.get('mode')
  }

  get Date_init() {
    return this.form.get('date_init')
  }

  get Date_end() {
    return this.form.get('date_end')
  }

}
