import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Favorite } from '../models/favorite';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  apiKey = `${environment.apiKey}/Favorite`;

  constructor(private client:HttpClient) { }

  getAllFavorites():Observable<Favorite[]>{
    return this.client.get<Favorite[]>(this.apiKey);
  }

  getFavoriteById(id: number):Observable<Favorite>{
    return this.client.get<Favorite>(`${this.apiKey}/${id}`);
  }

  createFavorite(favorite: Favorite):Observable<Favorite>{
    return this.client.post<Favorite>(this.apiKey, favorite);
  }

  updateFavorite(id: number, favorite: Favorite):Observable<Favorite>{
    return this.client.put<Favorite>(`${this.apiKey}/${id}`, favorite);
  }

  deleteFavorite(favoriteId:number, userId: number):Observable<Favorite>{
    return this.client.delete<Favorite>(`${this.apiKey}/${favoriteId}/${userId}`);
  }
}
