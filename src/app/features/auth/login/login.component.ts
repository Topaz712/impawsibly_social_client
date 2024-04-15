import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: '../auth.shared.scss',
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  isError: boolean = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  login() {
    console.log('button clicked');
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      this.authService.login(username, password).subscribe({
        next: (res: any) => {
          this.router.navigate(['/']);
          console.log(res, 'This is my auth service login');
        },
        error: (error: any) => {
          console.error('Login error', error);
          this.isError = true;
        },
      });
    } else {
      console.log('we must have an errror');
    }
  }
}
