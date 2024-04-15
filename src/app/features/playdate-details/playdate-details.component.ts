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
  participants: any;

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
          this.prepareParticipants();
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

        if (this.currentUser) {
          // push participants in event otherwise filter participants who left
          if (this.hasJoined) {
            this.playdate.human_participants.push(this.currentUser);
          } else {
            this.playdate.human_participants =
              this.playdate.human_participants.filter(
                (p) => p.id !== this.currentUser?.id
              );
          }
          this.prepareParticipants();
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  prepareParticipants() {
    this.participants = [
      ...this.playdate.human_participants,
      ...this.playdate.pet_participants,
    ];

    const availableSpots =
      this.playdate.pet_limit - this.playdate.pet_participants.length;

    for (let i = 0; i < availableSpots; i++) {
      // if empty slots, allow participants
      this.participants.push({ empty: true });
    }
  }
  // index and item being id of the object
  trackById(index: number, item: any) {
    // if item doesn't have an id, use index
    return item.id || index;
  }
}
