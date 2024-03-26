import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post';
import { PostComponent } from '../../shared/components/posts/post/post.component';
import { PostService } from '../../core/services/post.service';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent implements OnInit {
  posts: Post[] = [
    // new Post({
    //   id: 1,
    //   title: 'post 1',
    //   content: 'content 1',
    //   created_at: '2021-01-01',
    //   pet: {
    //     name: 'Seraph',
    //     species: 'Dog',
    //     breed: 'Chihuaha',
    //     sex: 'Male',
    //     birthday: '2021-01-01',
    //     is_vaccinated: true,
    //     is_fixed: true,
    //   },
    // }),
    // new Post({
    //   id: 2,
    //   title: 'post 2',
    //   content: 'content 2',
    //   created_at: '2022-01-01',
    //   pet: {
    //     name: 'Courage',
    //     species: 'Dog',
    //     breed: 'Chihuaha',
    //     sex: 'Male',
    //     birthday: '2020-01-01',
    //     is_vaccinated: true,
    //     is_fixed: true,
    //   },
    // }),
  ];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getTimelinePetPosts().subscribe({
      next: (posts: Post[]) => {
        this.posts = posts;
      },
      error: (error: any) => {
        console.error('Error fetching timeline posts', error);
      },
    });
  }
}
