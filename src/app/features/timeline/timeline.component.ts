import { Component } from '@angular/core';
import { Post } from '../../shared/models/post';
import { PostComponent } from '../../shared/components/posts/post/post.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  posts: Post[] = [
    new Post({
      id: 1,
      title: 'post 1',
      content: 'content 1',
      created_at: '2021-01-01',
      pet: {
        name: 'Seraph',
        species: 'Dog',
        breed: 'Chihuaha',
        sex: 'Male',
        birthday: '2021-01-01',
        is_vaccinated: true,
        is_fixed: true,
      },
    }),
    new Post({
      id: 2,
      title: 'post 2',
      content: 'content 2',
      created_at: '2022-01-01',
      pet: {
        name: 'Courage',
        species: 'Dog',
        breed: 'Chihuaha',
        sex: 'Male',
        birthday: '2020-01-01',
        is_vaccinated: true,
        is_fixed: true,
      },
    }),
  ];

  constructor() {}
}
