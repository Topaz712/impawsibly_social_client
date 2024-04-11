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
    species_specific: new FormControl(false),
    species_specific_input: new FormControl(''),
    start_date_time: new FormControl('', Validators.required),
    end_date_time: new FormControl('', Validators.required),
    pet_limit: new FormControl('', Validators.required),
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
    formData.append('pet_limit', this.playdateForm.get('pet_limit')!.value);
    formData.append(
      'species_specific',
      this.playdateForm.get('species_specific')!.value
    );
    formData.append(
      'start_date_time',
      this.playdateForm.get('start_date_time')!.value
    );
    formData.append(
      'end_date_time',
      this.playdateForm.get('end_date_time')!.value
    );
    formData.append('cover_image', this.selectedFile, this.selectedFile!.name);

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
