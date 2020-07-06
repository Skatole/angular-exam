import { PetService } from '../../services/pet.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Pet } from 'src/app/models/pet.model';

@Component({
  selector: 'app-add',
  template: `
<form [formGroup]="showForm">
    <label for="name" >
      <input type="text" formControlName="name">
      Name
    </label>
    <label for="type" >
      <input type="number" min="1" max="2" formControlName="type">
      Tpye
    </label>
    <label for="description" >
      <input type="text" formControlName="description">
      Description
    </label>
</form>
<button [disabled]="showForm.invalid" (click)="onAdd()">Add pet</button>
  `,
  styles: [``]
})
export class AddComponent implements OnInit {

  showForm: FormGroup;

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.showForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      type: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(2)]),
      description: new FormControl(null, [Validators.required, Validators.maxLength(100)])
    });
  }

  onAdd() {
    const showPet: Pet = {
      name: this.showForm.getRawValue().name,
      type: this.showForm.getRawValue().type,
      description: this.showForm.getRawValue().description,
    };
    this.petService.addPet(showPet);
  }


}
