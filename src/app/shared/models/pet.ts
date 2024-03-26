import { Owner } from './owner';

export class Pet {
  id: number;
  name: string;
  species: string;
  breed: string;
  sex: string;
  birthday: Date;
  isVaccinated: boolean;
  isFixed: boolean;
  owner?: Owner;

  constructor(pet: any) {
    this.id = pet.id || 0;
    this.name = pet.name || '';
    this.species = pet.species || '';
    this.breed = pet.breed || '';
    this.sex = pet.sex || '';
    this.birthday = pet.birthday || '';
    this.isVaccinated = pet.isVaccinated || '';
    this.isFixed = pet.isFixed || '';
    this.owner = pet.Owner || null;
  }
}
