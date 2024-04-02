import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaydateService } from '../../core/services/playdate.service';
import { Playdate } from '../../shared/models/playdate';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-playdate-details',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './playdate-details.component.html',
  styleUrl: './playdate-details.component.scss',
})
export class PlaydateDetailsComponent implements OnInit {
  playdate: Playdate = new Playdate({});

  constructor(
    private route: ActivatedRoute,
    private playdateService: PlaydateService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.playdateService.getPlaydate(params['id']).subscribe({
        next: (playdate: Playdate) => {
          this.playdate = playdate;
          console.log('get playdate details:', this.playdate);
        },
        error: (error) => {
          console.log(error);
        },
      });
    });
  }
}
