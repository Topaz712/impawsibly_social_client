import { Pet } from './pet';

export class Post {
  id: number;
  content: string;
  created_at: string;
  pet?: Pet;

  constructor(post: any) {
    this.id = post.id || 0;
    this.content = post.content || '';
    this.created_at = post.created_at || '';
    this.pet = post.pet || null;
  }
}
