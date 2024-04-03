import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../../../core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './owner-profile.component.html',
  styleUrl: './owner-profile.component.scss',
})
export class OwnerProfileComponent implements OnInit {
  ownerForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });

  currentUser: any;
  hasProfile = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.getBootstrapData().subscribe({
      next: (user: any) => {
        const userId = user.current_user.id;
        // populate the current user's ID in form
        this.ownerForm.patchValue({
          userId: userId,
        });
      },
      error: (error: any) => {
        console.error('Error fetching user data:', error);
      },
    });
  }

  onCreateProfile(): void {
    if (this.ownerForm.valid) {
      const firstName = this.ownerForm.value.firstName;
      const lastName = this.ownerForm.value.lastName;
    }
  }
}
