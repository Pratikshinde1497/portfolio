import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyleImage]'
})
export class StyleImageDirective {

  @Input() img: string;
  elmt: ElementRef;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.elmt = el;
  }


  

  ngOnInit() {
    const requiredStyle = {
      'background-image': `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${this.img})`,
      'height': '10em',
      'width': '100%',
      'background-size': 'cover',
      'background-position':' center',
      'margin-bottom': '.5em',
      'border-radius': '10px',
    }

    Object.keys(requiredStyle).forEach(styleName => {
      this.renderer.setStyle(this.elmt.nativeElement, styleName, requiredStyle[styleName])
    });
    
    // console.log(this.elmt.nativeElement.style);
    
  }
}
