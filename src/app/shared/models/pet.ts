import { User } from './user';

export class Pet {
  id: number;
  name: string;
  bio: string;
  species: string;
  breed: string;
  sex: string;
  birthday: Date;
  is_vaccinated: boolean;
  is_fixed: boolean;
  avatar_image_url: string;
  user?: User;

  constructor(pet: any) {
    this.id = pet.id || 0;
    this.name = pet.name || '';
    this.bio = pet.bio || '';
    this.species = pet.species || '';
    this.breed = pet.breed || '';
    this.sex = pet.sex || '';
    this.birthday = pet.birthday || new Date();
    this.is_vaccinated = pet.is_vaccinated || false;
    this.is_fixed = pet.is_fixed || false;
    this.avatar_image_url = pet.avatar_image_url;
    this.user = pet.User || null;
  }
}
