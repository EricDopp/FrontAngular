import {ReactiveFormsModule }from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './components/add-event-form/add-event-form.component';

import {HttpClientModule} from '@angular/common/http';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HeaderComponent } from './components/header/header.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { FavoriteDetailsComponent } from './components/favorite-details/favorite-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    FavoritesComponent,
    HeaderComponent,
    EventDetailsComponent,
    FavoriteDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
