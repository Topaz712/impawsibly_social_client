import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PetService } from '../../core/services/pet.service';
import { Router, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-create-pet',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe, RouterLink],
  templateUrl: './create-pet.component.html',
  styleUrl: './create-pet.component.scss',
})
export class CreatePetComponent implements OnInit {
  petForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    bio: new FormControl('', Validators.required),
    species: new FormControl('', Validators.required),
    breed: new FormControl('', Validators.required),
    sex: new FormControl('', Validators.required),
    birthday: new FormControl('', Validators.required),
    is_vaccinated: new FormControl('', Validators.required),
    is_fixed: new FormControl('', Validators.required),
  });

  selectedFile: File | null = null;
  userId: number | null = null;

  constructor(
    private userService: UserService,
    private petService: PetService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.currentUserBehaviorSubject.subscribe((user) => {
      if (user) {
        this.userId = user.id;
      } else {
        console.error('User ID not found. Please log in.');
        this.router.navigate(['/login']);
      }
    });
  }

  onCreatePet() {
    if (!this.userId) {
      console.error('User ID not found.');
      return;
    }

    const formData: any = new FormData();
    formData.append('name', this.petForm.get('name')!.value);
    formData.append('bio', this.petForm.get('bio')!.value);
    formData.append('species', this.petForm.get('species')!.value);
    formData.append('breed', this.petForm.get('breed')!.value);
    formData.append('sex', this.petForm.get('sex')!.value);
    formData.append('birthday', this.petForm.get('birthday')!.value);
    formData.append('is_vaccinated', this.petForm.get('is_vaccinated')!.value);
    formData.append('is_fixed', this.petForm.get('is_fixed')!.value);
    formData.append('avatar_image', this.selectedFile, this.selectedFile!.name);
    formData.append('userId', this.userId.toString());

    this.petService.createPet(formData).subscribe({
      next: () => {
        this.router.navigate(['/pet-profile']);
        console.log(this.petForm);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.selectedFile = event.target.files[0];
    }
  }
}
