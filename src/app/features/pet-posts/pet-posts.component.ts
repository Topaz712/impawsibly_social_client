import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../../shared/models/pet';
import { User } from '../../shared/models/user';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PetService } from '../../core/services/pet.service';
import { UserService } from '../../core/services/user.service';
import { DatePipe } from '@angular/common';
import { Post } from '../../shared/models/post';
import { PostService } from '../../core/services/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pet-posts',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './pet-posts.component.html',
  styleUrl: './pet-posts.component.scss',
})
export class PetPostsComponent implements OnInit {
  @Input() pet: Pet = new Pet({});
  currentUser: User | null = new User({});

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petService: PetService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.petService.getPetById(params['id']).subscribe({
        next: (pet: Pet) => {
          this.pet = pet;
          console.log('get pet details:', this.pet);
        },
        error: (error) => {
          console.log(error);
        },
      });
    });

    this.userService.currentUserBehaviorSubject.subscribe(() => {
      this.currentUser = this.userService.currentUserBehaviorSubject.value;
    });
  }

  // fetchPetPosts() {
  //   this.postService.getTimelinePetPostsById(this.pet.id).subscribe({
  //     next: (posts: Post[]) => {
  //       this.petPosts = posts;
  //     },
  //     error: (error) => {
  //       console.log('Error fetching pet posts:', error);
  //     },
  //   });
  // }

  onUpdatePet(petId: number) {
    this.router.navigate(['/update-pet', petId]);
  }

  onDeletePet(petId: number) {
    Swal.fire({
      title: 'Delete pet profile?',
      text: 'Tell your pet I said Hi!',
      icon: 'warning',
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.petService.deletePet(petId).subscribe({
          next: () => {
            Swal.fire('Deleted!', 'Pet has been deleted.', 'success');
          },
          error: (error) => {
            console.error('Error deleting pet:', error);
          },
        });
        this.router.navigate(['profile']);
      }
    });
  }
}
