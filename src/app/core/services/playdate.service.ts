import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Playdate } from '../../shared/models/playdate';

@Injectable({
  providedIn: 'root',
})
export class PlaydateService {
  constructor(private http: HttpClient) {}

  getPlaydates(page: number) {
    return this.http.get<Playdate[]>(
      `${environment.apiUrl}/playdates?page=${page}`
    );
  }

  getPlaydate(id: string | number) {
    return this.http.get<Playdate>(`${environment.apiUrl}/playdates/${id}`);
  }

  createPlaydate(playdate: Playdate) {
    return this.http.post(`${environment.apiUrl}/playdates`, playdate);
  }

  joinPlaydate(playdateId: number) {
    return this.http.post(
      `${environment.apiUrl}/playdates/${playdateId}/join`,
      {}
    );
  }

  leavePlaydate(playdateId: number) {
    return this.http.delete(
      `${environment.apiUrl}/playdates/${playdateId}/leave`
    );
  }
}
