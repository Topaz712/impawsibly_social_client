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
    path: 'posts',
    loadComponent: () =>
      import('./features/timeline/timeline.component').then(
        (c) => c.TimelineComponent
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
    canActivateChild: [authGuard],
    children: [
      {
        path: 'pet-profile',
        loadComponent: () =>
          import(
            './shared/components/profile/pet-profile/pet-profile.component'
          ).then((c) => c.PetProfileComponent),
      },
    ],
  },
  {
    path: 'playdates',
    loadComponent: () =>
      import('./features/playdates/playdates.component').then(
        (c) => c.PlaydatesComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'create-playdate',
    loadComponent: () =>
      import('./features/create-playdate/create-playdate.component').then(
        (c) => c.CreatePlaydateComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'playdates/:id',
    loadComponent: () =>
      import('./features/playdate-details/playdate-details.component').then(
        (c) => c.PlaydateDetailsComponent
      ),
    canActivate: [authGuard],
  },
];
