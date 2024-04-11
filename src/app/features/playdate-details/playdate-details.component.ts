import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaydateService } from '../../core/services/playdate.service';
import { Playdate } from '../../shared/models/playdate';
import { DatePipe } from '@angular/common';
import { UserService } from '../../core/services/user.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-playdate-details',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './playdate-details.component.html',
  styleUrl: './playdate-details.component.scss',
})
export class PlaydateDetailsComponent implements OnInit {
  playdate: Playdate = new Playdate({});
  currentUser: User | null = new User({});
  hasJoined: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private playdateService: PlaydateService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.playdateService.getPlaydate(params['id']).subscribe({
        next: (playdate: Playdate) => {
          this.playdate = playdate;
          this.hasJoined = playdate.has_joined;
          console.log('get playdate details:', this.playdate);
        },
        error: (error) => {
          console.log(error);
        },
      });
    });

    this.userService.currentUserBehaviorSubject.subscribe(() => {
      this.currentUser = this.userService.currentUserBehaviorSubject.value;
    });
  }

  toggleJoinPlaydate() {
    const playdateJoin$ = this.hasJoined
      ? this.playdateService.leavePlaydate(this.playdate.id)
      : this.playdateService.joinPlaydate(this.playdate.id);

    playdateJoin$.subscribe({
      next: () => {
        this.hasJoined = !this.hasJoined;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
