import { Pet } from './pet';
import { Profile } from './profile';

export class Post {
  id: number;
  content: string;
  created_at: string;
  profile?: Profile;
  pet?: Pet;

  constructor(post: any) {
    this.id = post.id || 0;
    this.content = post.content || '';
    this.created_at = post.created_at || '';
    this.profile = post.profile || null;
    this.pet = post.pet || null;
  }
}
