import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PostService } from '../../core/services/post.service';
import { Router } from '@angular/router';
import { PetService } from '../../core/services/pet.service';
import { UserService } from '../../core/services/user.service';
import { Pet } from '../../shared/models/pet';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss',
})
export class CreatePostComponent implements OnInit {
  postForm: FormGroup = new FormGroup({
    content: new FormControl('', Validators.required),
    petIds: new FormArray([]),
  });

  selectedFile: File | null = null;
  pets: Pet[] = [];

  constructor(
    private postService: PostService,
    private router: Router,
    private petService: PetService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadPetIds();
  }

  addPetToForm() {
    (this.postForm.get('petIds') as FormArray).push(new FormControl(false));
  }

  loadPetIds() {
    this.petService.getUserPets().subscribe({
      next: (pets: any) => {
        console.log('loadPetIds: ', pets);
        this.pets = pets;
        pets.forEach((pet: Pet) => {
          this.addPetToForm();
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  get petIds(): FormArray {
    return this.postForm.get('petIds') as FormArray;
  }

  fetchPetIds() {
    const petIdsFormValue = this.postForm.value.petIds;
    const petIds = petIdsFormValue
      .map((checked: boolean, i: number) => {
        return checked ? this.pets[i].id : null;
      })
      .filter((id: any) => {
        return id !== null;
      });
    return petIds;
  }

  onCreatePost() {
    const petIds = this.fetchPetIds();
    const formData: any = new FormData();
    formData.append('content', this.postForm.get('content')!.value);
    petIds.forEach((petId: any) => {
      formData.append('pet_id', petId);
    });
    formData.append('images', this.selectedFile, this.selectedFile!.name);

    this.postService.createPost(formData).subscribe({
      next: () => {
        this.router.navigate(['/']);
        console.log(this.postForm);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onFileSelected(post: any) {
    if (post.target.files && post.target.files[0]) {
      this.selectedFile = post.target.files[0];
    }
  }
}
