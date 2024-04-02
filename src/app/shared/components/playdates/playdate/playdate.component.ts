import { Component, Input } from '@angular/core';
import { Playdate } from '../../../models/playdate';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-playdate',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './playdate.component.html',
  styleUrl: './playdate.component.scss',
})
export class PlaydateComponent {
  @Input({ required: true }) playdate: Playdate = new Playdate({});
}
