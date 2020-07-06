import { PetType } from './../models/pet.model';
import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundColorDirective {

  @Input() petType: PetType;

  @HostBinding('style.background') backgroundColor = 'transparent';

  @HostListener('mouseenter') public mouseEnter() {
    this.petType === PetType.DOG ? this.backgroundColor = 'BLUE' : this.backgroundColor = 'RED';
  }

  @HostListener('mouseleave') public mouseLeave() {
    this.backgroundColor = 'transparent';
  }

  constructor() { }

}
