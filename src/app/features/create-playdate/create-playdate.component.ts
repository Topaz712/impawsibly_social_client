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

  selectedFile: File | null = null;

  constructor(
    private playdateService: PlaydateService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreatePlaydate() {
    const formData: any = new FormData();
    formData.append('title', this.playdateForm.get('title')!.value);
    formData.append('content', this.playdateForm.get('content')!.value);
    formData.append('petLimit', this.playdateForm.get('petLimit')!.value);
    formData.append(
      'speciesSpecific',
      this.playdateForm.get('speciesSpecific')!.value
    );
    formData.append(
      'startDateTime',
      this.playdateForm.get('startDateTime')!.value
    );
    formData.append('endDateTime', this.playdateForm.get('endDateTime')!.value);
    formData.append('cover-image', this.selectedFile, this.selectedFile!.name);

    this.playdateService.createPlaydate(formData).subscribe({
      next: () => {
        this.router.navigate(['/playdates']);
        console.log(this.playdateForm);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onFileSelected(playdate: any) {
    if (playdate.target.files && playdate.target.files[0]) {
      this.selectedFile = playdate.target.files[0];
    }
  }
}
