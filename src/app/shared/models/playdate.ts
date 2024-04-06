import { Pet } from './pet';
import { User } from './user';

export class Playdate {
  id: number;
  title: string;
  content: string;
  speciesSpecific: boolean;
  petLimit: number;
  startDateTime: string;
  endDateTime: string;
  createdAt: string;
  hasJoined: boolean;
  cover_image_url: string;
  participants: User[] | Pet[];
  creator: User;
  pet?: Pet;

  constructor(playdate: any) {
    this.id = playdate.id || 0;
    this.title = playdate.title || '';
    this.content = playdate.content || '';
    this.startDateTime = playdate.startDateTime;
    this.endDateTime = playdate.endDateTime;
    this.createdAt = playdate.createdAt;
    this.creator = playdate.creator || new User({});
    this.pet = playdate.pet || null;
    this.petLimit = playdate.petLimit || 0;
    this.speciesSpecific = playdate.speciesSpecific || false;
    this.hasJoined = playdate.hasJoined || false;
    this.cover_image_url = playdate.cover_image_url;
    this.participants = playdate.participants || [];
  }
}
