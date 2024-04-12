import { Component } from '@angular/core';
import { LoginComponent } from '../auth/login/login.component';
import { TimelineComponent } from '../timeline/timeline.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [LoginComponent, TimelineComponent],
})
export class HomeComponent {}
