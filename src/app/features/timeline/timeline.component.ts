import { Component } from '@angular/core';
import { Post } from '../../shared/models/post';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  posts: Post[] = [
    new Post({
      id: 1,
      title: 'post 1',
      content: 'content 1',
      created_at: '2020-01-01',
      pet: {},
    }),
  ];
}
