import { Pet } from './pet';
import { User } from './user';

export class Playdate {
  id: number;
  title: string;
  content: string;
  species_specific: boolean;
  pet_limit: number;
  start_date_time: string;
  end_date_time: string;
  created_at: string;
  has_joined: boolean;
  cover_image_url: string;
  human_participants: User[];
  pet_participants: Pet[];
  creator: User;
  selected_pet: Pet;

  constructor(playdate: any) {
    this.id = playdate.id || 0;
    this.title = playdate.title || '';
    this.content = playdate.content || '';
    this.start_date_time = playdate.startDateTime;
    this.end_date_time = playdate.endDateTime;
    this.created_at = playdate.createdAt;
    this.creator = playdate.creator || new User({});
    this.selected_pet = playdate.pet || new Pet({});
    this.pet_limit = playdate.petLimit || 0;
    this.species_specific = playdate.speciesSpecific || false;
    this.has_joined = playdate.hasJoined || false;
    this.cover_image_url = playdate.cover_image_url;
    this.human_participants = playdate.participants || [];
    this.pet_participants = playdate.participants || [];
  }
}
