import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appMissingImg]'
})
export class MissingImgDirective {

  constructor(private el: ElementRef) { }

  @HostListener('error')
  private onError() {
    this.el.nativeElement.src = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg';
  }
}
