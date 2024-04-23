import { Injectable } from '@angular/core';
import { Post } from '../../shared/models/post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getTimelinePetPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/posts`);
  }

  getTimelinePetPostsById(petId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/pets/${petId}/posts`);
  }

  createPost(post: Post) {
    return this.http.post<Post>(`${environment.apiUrl}/posts`, post);
  }

  getPostComments(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(
      `${environment.apiUrl}/posts/${postId}/comments`
    );
  }

  createComment(postId: number, content: string) {
    return this.http.post(
      `${environment.apiUrl}/posts/${postId}/create_comment`,
      content
    );
  }

  likePost(postId: number) {
    return this.http.post(`${environment.apiUrl}/posts/${postId}/like`, {});
  }

  unlikePost(postId: number) {
    return this.http.delete(`${environment.apiUrl}/posts/${postId}/unlike`);
  }
}
