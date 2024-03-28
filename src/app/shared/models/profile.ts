import { Owner } from './owner';
import { Pet } from './pet';

export class Profile {
  id: number;
  bio: string;
  pet?: Pet;
  owner?: Owner;

  constructor(profile: any) {
    this.id = profile.id || 0;
    this.bio = profile.bio || '';
    this.pet = profile.pet || null;
    this.owner = profile.owner || null;
  }
}
