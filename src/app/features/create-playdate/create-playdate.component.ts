import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PlaydateService } from '../../core/services/playdate.service';
import { Playdate } from '../../shared/models/playdate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-playdate',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-playdate.component.html',
  styleUrl: './create-playdate.component.scss',
})
export class CreatePlaydateComponent implements OnInit {
  playdateForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    speciesSpecific: new FormControl(false),
    speciesSpecificInput: new FormControl(''),
    startDateTime: new FormControl('', Validators.required),
    endDateTime: new FormControl('', Validators.required),
    petLimit: new FormControl('', Validators.required),
  });

  constructor(
    private playdateService: PlaydateService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreatePlaydate() {
    const playdate: Playdate = {
      ...this.playdateForm.value,
    };
    this.playdateService.createPlaydate(playdate).subscribe({
      next: () => {
        this.router.navigate(['/playdates']);
        console.log(this.playdateForm);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
