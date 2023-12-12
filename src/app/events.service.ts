import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private baseURL = 'http://localhost:8080/api/v1/events/all';

  constructor(private httpClient: HttpClient) {}

  getEventsList(): Observable<any> {
    return this.httpClient.get<Event[]>(this.baseURL);
  }
}
