import { Pet } from './pet';
import { User } from './user';

export class Post {
  id: number;
  content: string;
  created_at: string;
  pet?: Pet;
  user?: User;
  post_image_url: string;
  liked: boolean;

  constructor(post: any) {
    this.id = post.id || 0;
    this.content = post.content || '';
    this.created_at = post.created_at || '';
    this.pet = post.pet || null;
    this.user = post.user || null;
    this.post_image_url = post.post_image_url;
    this.liked = post.liked || false;
  }
}
