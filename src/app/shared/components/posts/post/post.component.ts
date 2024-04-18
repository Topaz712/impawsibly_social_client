import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../models/post';
import { DatePipe } from '@angular/common';
import { PostService } from '../../../../core/services/post.service';
import { FormsModule } from '@angular/forms';
import { Comment } from '../../../models/comment';
import { PetService } from '../../../../core/services/pet.service';
import { Pet } from '../../../models/pet';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  @Input({ required: true }) post: Post = new Post({});
  @Input({ required: true }) pet: Pet = new Pet({});
  commentContent: string = '';
  comments: Comment[] = [];

  constructor(
    private postService: PostService,
    private petService: PetService
  ) {}

  ngOnInit(): void {
    // this.fetchComments();
  }

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

  // fetch comments for the current post
  // fetchComments() {
  //   this.postService.getPostComments(this.post.id).subscribe({
  //     next: (comments: Comment[]) => {
  //       this.comments = comments;
  //     },
  //     error: (error: any) => {
  //       console.error('Error fetching comments:', error);
  //     },
  //   });
  // }

  // updates the post with the new comment
  // onSubmitComment() {
  //   this.postService
  //     .createComment(this.post.id, this.commentContent)
  //     .subscribe({
  //       next: (comment: Comment) => {
  //         this.comments.push(comment);
  //         this.commentContent = '';
  //         console.log('Comment :', comment);
  //       },
  //       error: (error: any) => {
  //         console.log('Error creating comment:', error);
  //       },
  //     });
  // }
}
