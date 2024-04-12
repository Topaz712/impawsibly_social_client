import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: '../auth.shared.scss',
})
export class SignupComponent {
  signupForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password_confirmation: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  errors: string[] = [];

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  onSignUp() {
    const formValue = this.signupForm.value;

    this.authService.signup(formValue).subscribe({
      next: (res: any) => {
        this.router.navigate(['/login']);
      },
      error: (error: any) => {
        console.log(error.error);
        this.errors = error.error;
      },
    });
  }

  get username() {
    return this.signupForm.get('username');
  }
  get password() {
    return this.signupForm.get('password');
  }
}
