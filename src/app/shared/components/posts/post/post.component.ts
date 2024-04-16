import { Component, Input } from '@angular/core';
import { Post } from '../../../models/post';
import { DatePipe } from '@angular/common';
import { PostService } from '../../../../core/services/post.service';
import { Pet } from '../../../models/pet';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  @Input({ required: true }) post: Post = new Post({});

  constructor(private postService: PostService) {}

  likePost(): void {
    if (this.post.liked) {
      // unlike post
      this.postService.unlikePost(this.post.id).subscribe({
        next: () => {
          this.post.liked = false;
        },
        error: (error: any) => {
          console.error('Error unliking post', error);
        },
      });
    } else {
      // like post
      this.postService.likePost(this.post.id).subscribe({
        next: () => {
          this.post.liked = true;
        },
        error: (error: any) => {
          console.error('Error liking post', error);
        },
      });
    }
  }
}
