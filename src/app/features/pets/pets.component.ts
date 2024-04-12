import { Component, OnInit } from '@angular/core';
import { PetComponent } from '../../shared/components/pets/pet/pet.component';
import { Pet } from '../../shared/models/pet';
import { PetService } from '../../core/services/pet.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [PetComponent],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.scss',
})
export class PetsComponent implements OnInit {
  pets: Pet[] = [];

  constructor(
    private petService: PetService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(() => {
      this.loadPets();
    });
  }

  loadPets() {
    this.petService.getPets();
  }
}
