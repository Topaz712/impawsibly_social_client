import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { noAuthGuard } from './core/guards/no-auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./features/home/home.component').then((c) => c.HomeComponent),
    canActivate: [authGuard],
  },
  {
    path: 'posts',
    loadComponent: () =>
      import('./features/timeline/timeline.component').then(
        (c) => c.TimelineComponent
      ),
    canActivate: [noAuthGuard],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then(
        (c) => c.LoginComponent
      ),
    canActivate: [noAuthGuard],
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./features/auth/signup/signup.component').then(
        (c) => c.SignupComponent
      ),
    canActivate: [noAuthGuard],
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./shared/components/profile/profile.component').then(
        (c) => c.ProfileComponent
      ),
    canActivate: [authGuard],
  },
];
