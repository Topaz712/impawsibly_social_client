export class User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;

  constructor(user: any) {
    this.id = user.id || 0;
    this.firstName = user.firstName || '';
    this.lastName = user.lastName || '';
    this.username = user.username || '';
    this.email = user.email || '';
  }
}
