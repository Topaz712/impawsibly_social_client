import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PetService } from '../../../../core/services/pet.service';
import { Router, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ProfileService } from '../../../../core/services/profile.service';

@Component({
  selector: 'app-pet-profile',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe, RouterLink],
  templateUrl: './pet-profile.component.html',
  styleUrl: './pet-profile.component.scss',
})
export class PetProfileComponent implements OnInit {
  petForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    species: new FormControl('', Validators.required),
    breed: new FormControl('', Validators.required),
    sex: new FormControl('', Validators.required),
    birthday: new FormControl('', Validators.required),
    isVaccinated: new FormControl('', Validators.required),
    isFixed: new FormControl('', Validators.required),
  });

  selectedFile: File | null = null;
  ownerId: number | null = null;

  constructor(
    private petService: PetService,
    private profileService: ProfileService,
    private router: Router
  ) {}

  // ngOnInit(): void {
  //   this.profileService.getOwnerProfile(this.ownerId.toString()).subscribe(
  //     (ownerProfile: any) => {
  //       this.ownerId = ownerProfile?.id;
  //       console.log(ownerProfile);
  //     },
  //     (error) => {
  //       console.error('Error fetching owner profile:', error);
  //     }
  //   );
  // }

  ngOnInit(): void {}

  onCreatePet() {
    if (!this.ownerId) {
      console.error('Owner ID not found.');
      return;
    }

    const formData: any = new FormData();
    formData.append('name', this.petForm.get('name')!.value);
    formData.append('species', this.petForm.get('species')!.value);
    formData.append('breed', this.petForm.get('breed')!.value);
    formData.append('sex', this.petForm.get('sex')!.value);
    formData.append('birthday', this.petForm.get('birthday')!.value);
    formData.append('isVaccinated', this.petForm.get('isVaccinated')!.value);
    formData.append('isFixed', this.petForm.get('isFixed')!.value);
    formData.append('cover-image', this.selectedFile, this.selectedFile!.name);
    formData.append('ownerId', this.ownerId.toString());

    this.petService.createPet(formData).subscribe({
      next: () => {
        this.router.navigate(['/pets']);
        console.log(this.petForm);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onFileSelected(petProfile: any) {
    if (petProfile.target.files && petProfile.target.files[0]) {
      this.selectedFile = petProfile.target.files[0];
    }
  }
}
