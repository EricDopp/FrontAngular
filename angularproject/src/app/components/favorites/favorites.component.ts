import { Component } from '@angular/core';
import { Favorite } from 'src/app/models/favorite';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

  constructor(private favoriteService:FavoritesService){}

  favorites:Favorite[] = [];
  ngOnInit(){
    return this.favoriteService.getAllFavorites().subscribe(favorite => this.favorites = favorite);
  }
}
