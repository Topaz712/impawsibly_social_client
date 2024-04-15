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
    // canActivate: [noAuthGuard], //this being commented out lets posts show on dashboard... why..
  },
  {
    path: 'create-pet',
    loadComponent: () =>
      import('./features/create-pet/create-pet.component').then(
        (c) => c.CreatePetComponent
      ),
    canActivate: [authGuard],
  },
  {
    // should show pets profile along with posts
    path: 'pet-profile/:id',
    loadComponent: () =>
      import('./features/pet-posts/pet-posts.component').then(
        (c) => c.PetPostsComponent
      ),
    canActivate: [authGuard],
  },
  {
    //show user's pets profiles
    path: 'pets',
    loadComponent: () =>
      import('./features/pets/pets.component').then((c) => c.PetsComponent),
    canActivate: [authGuard],
  },
  {
    // update pets
    path: 'update-pet/:id',
    loadComponent: () =>
      import(
        './shared/components/pet-update-modal/pet-update-modal.component'
      ).then((c) => c.PetUpdateModalComponent),
    canActivate: [authGuard],
  },

  {
    // user's profile
    path: 'profile',
    loadComponent: () =>
      import('./shared/components/profile/profile.component').then(
        (c) => c.ProfileComponent
      ),
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
