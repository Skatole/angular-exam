import { PetService } from './../../services/pet.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pet } from 'src/app/models/pet.model';

@Component({
  selector: 'app-list',
  template: `
<ng-container *ngFor="let pet of pets">
    <p appBackground [petType]="pet.type">{{ pet.name }}</p>
    <p> {{pet.type}} </p>
    <p>{{pet.description | tooLong }}</p>
</ng-container>
  `,
  styles: [``]
})
export class ListComponent implements OnInit, OnDestroy {

  subscription$: Subscription[] = [];
  pets: Pet[] = [];

  constructor(private petService: PetService) { }
  ngOnDestroy(): void {
    this.subscription$.forEach( sub => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.subscription$.push(this.petService._pets$.subscribe( sub => {
      this.pets = sub;
    }))
  }


}
