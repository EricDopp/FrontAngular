import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Favorite } from 'src/app/models/favorite';
import { FavoritesService } from 'src/app/services/favorites.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite-details',
  templateUrl: './favorite-details.component.html',
  styleUrls: ['./favorite-details.component.css']
})
export class FavoriteDetailsComponent {
  constructor(private route:ActivatedRoute, private favoriteService:FavoritesService, private router:Router){}

  favoriteId: string|null = "";
  favorite:Favorite = {userId: '-1', eventId: -1};

  ngOnInit(){
    this.favoriteId = this.route.snapshot.paramMap.get('id');

    if(this.favoriteId !== null){
      this.favoriteService.getFavoriteById(Number(this.favoriteId)).subscribe(favorite => this.favorite = favorite);
    }
  }

  unsubscribe(favorite:Favorite){
     this.favoriteService.deleteFavorite(Number(favorite.favoriteId), Number(favorite.userId)).subscribe();
     this.router.navigate(['/events']);
  }

}
