import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Events } from 'src/app/models/events';
import { Favorite } from 'src/app/models/favorite';
import { EventsService } from 'src/app/services/events.service';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
  constructor(private route:ActivatedRoute, private eventService:EventsService, private favoriteService:FavoritesService){}

  eventId: string|null = "";

  event: Events|null = null;

  ngOnInit(){
    this.eventId = this.route.snapshot.paramMap.get('id');

    if(this.eventId !== null){
      this.eventService.getEventById(Number(this.eventId)).subscribe(event => this.event = event);
    }
  }

  subscribe(event: any) {
    // Implement subscription logic here
    console.log('Subscribed to event:', event);
    const favorite:Favorite = {userId: '0' , eventId: event.eventId };
    this.favoriteService.createFavorite(favorite).subscribe();
  }
}
