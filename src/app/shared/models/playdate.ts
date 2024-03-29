import { Owner } from './owner';
import { Pet } from './pet';

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
  participants: Owner[] | Pet[];
  creator: Owner;
  pet?: Pet;

  constructor(playdate: any) {
    this.id = playdate.id || 0;
    this.title = playdate.title || '';
    this.content = playdate.content || '';
    this.startDateTime = playdate.startDateTime;
    this.endDateTime = playdate.endDateTime;
    this.createdAt = playdate.createdAt;
    this.creator = playdate.creator || new Owner({});
    this.petLimit = playdate.petLimit || 0;
    this.speciesSpecific = playdate.speciesSpecific || false;
    this.hasJoined = playdate.hasJoined || false;
    this.participants = playdate.participants || [];
  }
}