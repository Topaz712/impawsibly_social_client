import { Component, Input } from '@angular/core';
import { Pet } from '../../../models/pet';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pet',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.scss',
})
export class PetComponent {
  @Input({ required: true }) pet: Pet = new Pet({});
}
