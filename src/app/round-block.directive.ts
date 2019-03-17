import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';


@Directive({
  selector: '[appRoundBlock]'
})

export class RoundBlockDirective implements OnInit {

  @Input() appRoundBlock: string;

  constructor(
   private elmRef: ElementRef, 
   private renderer: Renderer2) 
  { }

  ngOnInit() {
    let roundVal = `${this.appRoundBlock}`;
    this.renderer.setStyle(this.elmRef.nativeElement, 'border-radius', roundVal);
  }

}