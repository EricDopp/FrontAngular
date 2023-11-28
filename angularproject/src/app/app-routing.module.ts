import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventComponent } from './components/add-event-form/add-event-form.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FavoriteDetailsComponent } from './components/favorite-details/favorite-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'events', pathMatch: 'full'},
  {path: 'events',  component:EventComponent },
  {path: 'event/:id', component: EventDetailsComponent},
  {path: 'favorites', component:FavoritesComponent},
  {path: 'favorites/:id', component:FavoriteDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
