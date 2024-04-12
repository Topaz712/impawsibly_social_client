import { Component, OnInit } from '@angular/core';
import { Pet } from '../../shared/models/pet';
import { User } from '../../shared/models/user';
import { ActivatedRoute } from '@angular/router';
import { PetService } from '../../core/services/pet.service';
import { UserService } from '../../core/services/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pet-posts',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './pet-posts.component.html',
  styleUrl: './pet-posts.component.scss',
})
export class PetPostsComponent implements OnInit {
  pet: Pet = new Pet({});
  currentUser: User | null = new User({});

  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.petService.getPets().subscribe({
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
}
