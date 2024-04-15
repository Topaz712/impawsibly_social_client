import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Pet } from '../../shared/models/pet';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  constructor(private http: HttpClient) {}

  getPets(page: number) {
    return this.http.get<Pet[]>(`${environment.apiUrl}/pets?page=${page}`);
  }

  getPetById(id: string | number) {
    return this.http.get<Pet>(`${environment.apiUrl}/pets/${id}`);
  }

  getUserPets() {
    return this.http.get<Pet[]>(`${environment.apiUrl}/user_pets`);
  }

  createPet(pet: Pet) {
    return this.http.post(`${environment.apiUrl}/pets`, pet);
  }

  updatePet(petId: number, petData: any) {
    return this.http.put<Pet>(`${environment.apiUrl}/pets/${petId}`, petData);
  }

  deletePet(petId: number) {
    return this.http.delete(`${environment.apiUrl}/pets/${petId}`);
  }
}
