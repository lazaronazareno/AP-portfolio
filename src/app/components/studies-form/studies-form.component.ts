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
  response: string | undefined | Study;
  error : string | undefined;
  id:null | undefined | string;

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
    console.log('id',this.id)
  }

  onSend(e:Event){
    e.preventDefault;
    console.log(this.form)
    this.portfolioService.postStudy(this.form.value).subscribe({
      next : (data) => {
        console.log('post study', data);
        this.response = data;
        this.route.navigate(['/portfolio']);
      },
      error: (error) => {
        console.log('post study failed', error);
        this.error = error;
      }
    })
  }

  onUpdated(e:Event) {
    e.preventDefault;
    console.log(this.form)
    this.portfolioService.putStudy(this.id, this.form.value).subscribe({
      next : (data) => {
        console.log('study updated', data);
        this.response = data;
        this.route.navigate(['/portfolio']);
      },
      error: (error) => {
        console.log('study updated failed', error);
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
