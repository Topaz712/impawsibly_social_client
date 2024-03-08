import { User } from './user';

export class Owner {
  id: number;
  firstName: string;
  lastName: string;
  contactInformation: string;
  user?: User;

  constructor(owner: any) {
    this.id = owner.id || 0;
    this.firstName = owner.firstName || '';
    this.lastName = owner.lastName || '';
    this.contactInformation = owner.contactInformation || '';
    this.user = owner.user || null;
  }
}
