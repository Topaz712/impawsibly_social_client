export class User {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  avatar_image_url: string;

  constructor(user: any) {
    this.id = user.id || 0;
    this.first_name = user.first_name || '';
    this.last_name = user.last_name || '';
    this.username = user.username || '';
    this.email = user.email || '';
    this.avatar_image_url = user.avatar_image_url;
  }
}
