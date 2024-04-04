import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getOwnerProfile(OwnerId: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/owners/${OwnerId}`);
  }

  createOwnerProfile(ownerData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/owners`, ownerData);
  }

  updateOwnerProfile(ownerId: number, ownerData: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/owners/${ownerId}`, ownerData);
  }

  deleteOwnerProfile(ownerId: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/owners/${ownerId}`);
  }

  getPetProfile(petId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/pets/${petId}`);
  }

  createPetProfile(petData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/pets`, petData);
  }

  updatePetProfile(petId: number, petData: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/pets/${petId}`, petData);
  }

  deletePetProfile(petId: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/pets/${petId}`);
  }
}
