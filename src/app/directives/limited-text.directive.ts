import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appLimitedText]'
})
export class LimitedTextDirective {

  elmt: ElementRef;
  constructor(private el: ElementRef, private renderer: Renderer2) { 
    this.elmt = el;
  }

  ngOnInit() {
    const styles = {
      'text-overflow': 'ellipsis',
      'overflow': 'hidden'
    }
    setTimeout(
      () => {
        const text = this.elmt.nativeElement.innerHTML;
        const less = text.substr(0, 100);
        this.elmt.nativeElement.innerHTML = less;

        // this.elmt.nativeElement.style.setStyle()
        Object.keys(styles).forEach(newStyle => {
          this.renderer.setStyle(
            this.elmt.nativeElement, `${newStyle}`, styles[newStyle]);
          });

      }, 100
    )
  }
}
