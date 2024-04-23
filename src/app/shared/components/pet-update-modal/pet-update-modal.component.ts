import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Pet } from '../../../shared/models/pet';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PetService } from '../../../core/services/pet.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pet-update-modal',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe, RouterLink],
  templateUrl: './pet-update-modal.component.html',
  styleUrl: './pet-update-modal.component.scss',
})
export class PetUpdateModalComponent implements OnInit {
  @Input({ required: true }) pet: Pet = new Pet({});
  petId: string | null = null;
  petData: Pet | null = null;
  selectedFile: File | null = null;

  updatePetForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    bio: new FormControl('', Validators.required),
    species: new FormControl('', Validators.required),
    breed: new FormControl('', Validators.required),
    sex: new FormControl('', Validators.required),
    birthday: new FormControl('', Validators.required),
    is_vaccinated: new FormControl('', Validators.required),
    is_fixed: new FormControl('', Validators.required),
  });

  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.petId = this.route.snapshot.paramMap.get('id');
    if (this.petId) {
      this.petService.getPetById(this.petId).subscribe((pet) => {
        this.petData = pet;
        this.populateForm();
      });
    }
  }

  populateForm(): void {
    if (!this.petData) return;
    const birthday = this.updatePetForm.get('birthday')!.value;
    const formattedBirthday = birthday
      ? new Date(birthday).toLocaleDateString()
      : null;

    this.updatePetForm.patchValue({
      name: this.pet.name,
      bio: this.pet.bio,
      species: this.pet.species,
      breed: this.pet.breed,
      sex: this.pet.sex,
      birthday: formattedBirthday,
      is_vaccinated: this.pet.is_vaccinated,
      is_fixed: this.pet.is_fixed,
    });
  }

  onSubmit() {
    if (!this.petId || !this.updatePetForm) return;

    const updatedPet = this.updatePetForm.value;
    const petId = parseInt(this.petId, 10);
    if (isNaN(petId)) {
      console.error('Invalid pet ID');
      return;
    }

    this.petService.updatePet(petId, updatedPet).subscribe({
      next: (response) => {
        console.log('Pet updated successfully:', response);
        this.router.navigate(['profile']);
      },
      error: (error) => {
        console.log('Error updating pet:', error);
      },
    });
  }

  onFileSelected(playdate: any) {
    if (playdate.target.files && playdate.target.files[0]) {
      this.selectedFile = playdate.target.files[0];
    }
  }
}
