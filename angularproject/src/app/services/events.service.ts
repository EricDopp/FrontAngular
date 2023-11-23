import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Events } from '../models/events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  apiKey = `${environment.apiKey}/Event`;
  constructor(private client:HttpClient) { }

  getAllEvents():Observable<Events[]>{
    return this.client.get<Events[]>(this.apiKey);
  }

  getEventById(id: number):Observable<Event>{
    return this.client.get<Event>(`${this.apiKey}/${id}`);
  }

  createEvent(event: Events):Observable<Events>{
    return this.client.post<Events>(this.apiKey, event);
  }

  updateEvent(id:number, event:Events):Observable<Events>{
    return this.client.put<Events>(`${this.apiKey}/${id}`, event);
  }

  deleteEvent(id:number):Observable<Events>{
    return this.client.delete<Events>(`${this.apiKey}/${id}`);
  }
}
