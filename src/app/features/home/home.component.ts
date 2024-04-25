import { Component, Input } from '@angular/core';
import { LoginComponent } from '../auth/login/login.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { User } from '../../shared/models/user';
import { UserService } from '../../core/services/user.service';
import { Pet } from '../../shared/models/pet';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [LoginComponent, TimelineComponent],
})
export class HomeComponent {
  @Input({ required: true }) pet: Pet = new Pet({});

  constructor(userService: UserService) {}
}
