import { Directive, Input, ElementRef, HostListener } from '@angular/core'

@Directive({
  selector:'[paintonHover]'
})
export default class Highlight {
  @Input('paintonHover')
  myHighlight:string ;
  constructor(private el:ElementRef,) {

  }
  @HostListener('mouseenter')
  mouseEnter(){
    console.log(this.myHighlight);
    this.highlight(this.myHighlight || 'green')
  }

  @HostListener('mouseleave')
  mouseLeave(){
    this.highlight('white')
  }
  highlight(color){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
