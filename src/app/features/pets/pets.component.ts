import { Component, OnInit } from '@angular/core';
import { PetComponent } from '../../shared/components/pets/pet/pet.component';
import { Pet } from '../../shared/models/pet';
import { PetService } from '../../core/services/pet.service';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [PetComponent, RouterLink],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.scss',
})
export class PetsComponent implements OnInit {
  currentPage: number = 1;
  totalPages: number = 0;
  pets: Pet[] = [];

  constructor(
    private petService: PetService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const page = params['page'] ? Number(params['page']) : 1;
      this.loadPets(page);
    });
  }

  loadPets(page: number) {
    this.petService.getPets(page).subscribe({
      next: (response: any) => {
        this.pets = response.pets;
        this.currentPage = response.current_page;
        this.totalPages = response.total_pages;
        console.log(this.pets, this.currentPage, this.totalPages);
      },
      error: (error: any) => {
        console.log('error when fetching pets', error);
      },
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { page: this.currentPage + 1 },
        queryParamsHandling: 'merge',
      });
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { page: this.currentPage - 1 },
        queryParamsHandling: 'merge',
      });
    }
  }
}
