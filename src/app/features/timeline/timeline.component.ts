import { Component, Input, OnInit, input } from '@angular/core';
import { Post } from '../../shared/models/post';
import { PostComponent } from '../../shared/components/posts/post/post.component';
import { PostService } from '../../core/services/post.service';
import { Pet } from '../../shared/models/pet';
import { PetService } from '../../core/services/pet.service';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent implements OnInit {
  @Input({ required: true }) pet: Pet = new Pet({});
  posts: Post[] = [];

  constructor(
    private postService: PostService,
    private petService: PetService
  ) {}

  ngOnInit(): void {
    this.postService.getTimelinePetPosts().subscribe({
      next: (posts: Post[]) => {
        console.log('this is post:', posts);
        this.posts = posts;
      },
      error: (error: any) => {
        console.error('Error fetching timeline posts', error);
      },
    });
  }
}
