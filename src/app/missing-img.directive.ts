import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appMissingImg]'
})
export class MissingImgDirective {

  constructor(private el: ElementRef) { }

  @HostListener('error')
  private onError() {
    this.el.nativeElement.src = 'https://i.ibb.co/VHRWcgt/not-found-image-15383864787lu.jpg';
  }
}
