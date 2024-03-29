import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Pet } from '../../shared/models/pet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  constructor(private http: HttpClient) {}

  createPet(pet: any): Observable<Pet> {
    return this.http.post<Pet>(`${environment.apiUrl}/pets`, pet);
  }

  getPetById(petId: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/pets/${petId}`);
  }

  updatePet(petId: number, petData: any): Observable<Pet> {
    return this.http.put<Pet>(`${environment.apiUrl}/pets/${petId}`, petData);
  }

  deletePet(petId: number): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/pets/${petId}`);
  }

  getPetPosts(petId: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/pets/${petId}/posts`);
  }
}
