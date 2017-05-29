import {Directive,Input,ElementRef} from '@angular/core'

@Directive({
  selector:'[makeYellow]'
})
export default class Highlight {
  constructor(private el:ElementRef,) {
    console.log('Hola');
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
