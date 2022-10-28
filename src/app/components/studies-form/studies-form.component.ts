import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Study } from 'src/app/porfolio-models';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UploadImgService } from 'src/app/services/upload-img.service';

@Component({
  selector: 'app-studies-form',
  templateUrl: './studies-form.component.html',
  styleUrls: ['./studies-form.component.scss']
})
export class StudiesFormComponent implements OnInit {
  form : FormGroup;
  loading : boolean = false;
  response: string | undefined | Study;
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
        school:[null, [Validators.required]],
        photo_url:[null],
        date_init:[null, [Validators.required]],
        date_end:[null, [Validators.required]],
      }
      )
   }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('id')
  }

  onSend(e:Event){
    e.preventDefault;
    this.loading = true;
    this.portfolioService.postStudy(this.form.value).subscribe({
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
    this.portfolioService.putStudy(this.id, this.form.value).subscribe({
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

  get Name() {
    return this.form.get('name')
  }
  get Description() {
    return this.form.get('description')
  }

  get School() {
    return this.form.get('school')
  }

  get Photo_url() {
    return this.form.get('photo_url')
  }

  get Date_init() {
    return this.form.get('date_init')
  }

  get Date_end() {
    return this.form.get('date_end')
  }

}
