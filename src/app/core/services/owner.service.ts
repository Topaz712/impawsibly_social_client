import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Owner } from '../../shared/models/owner';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OwnerService {
  constructor(private http: HttpClient) {}

  createOwner(owner: any): Observable<Owner> {
    return this.http.post<Owner>(`${environment.apiUrl}/owners`, owner);
  }

  getOwnerById(ownerId: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/owners/${ownerId}`);
  }

  updateOwner(ownerId: number, ownerData: any): Observable<Owner> {
    return this.http.put<Owner>(
      `${environment.apiUrl}/owners/${ownerId}`,
      ownerData
    );
  }

  deleteOwner(ownerId: number): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/owners/${ownerId}`);
  }
}
