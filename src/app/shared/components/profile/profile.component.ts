import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { Router, RouterLink } from '@angular/router';
import { Pet } from '../../models/pet';
import { User } from '../../models/user';
import { PetsComponent } from '../../../features/pets/pets.component';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, PetsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  currentUser: User | null = null;
  userPets: Pet = new Pet({});

  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.userService.currentUserBehaviorSubject.subscribe((user) => {
      this.currentUser = user;
    });
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
