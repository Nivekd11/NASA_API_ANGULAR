import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[lettersNumberOnly]'
})
export class LettersNumberOnlyDirective {

  

  constructor(public elRef: ElementRef) { }

  @HostListener('input',['$event'])
  onChangeInput(event: Event):void{
    const initValue : string = this.elRef.nativeElement.value;
    this.elRef.nativeElement.value= initValue.replace((/[^A-Za-z0-9]+$/g),"")
  }

}
