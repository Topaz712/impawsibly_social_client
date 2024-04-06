import { User } from './user';

export class Pet {
  id: number;
  name: string;
  bio: string;
  species: string;
  breed: string;
  sex: string;
  birthday: Date;
  isVaccinated: boolean;
  isFixed: boolean;
  user?: User;

  constructor(pet: any) {
    this.id = pet.id || 0;
    this.name = pet.name || '';
    this.bio = pet.bio || '';
    this.species = pet.species || '';
    this.breed = pet.breed || '';
    this.sex = pet.sex || '';
    this.birthday = pet.birthday || '';
    this.isVaccinated = pet.isVaccinated || '';
    this.isFixed = pet.isFixed || '';
    this.user = pet.User || null;
  }
}
