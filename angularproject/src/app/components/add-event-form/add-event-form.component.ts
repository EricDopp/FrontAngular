import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  events: any[] = [];
  newEvent: any = {};

  addEvent() {
    this.events.push({ ...this.newEvent });
    this.newEvent = {};
  }

  subscribe(event: any) {
    // Implement subscription logic here
    console.log('Subscribed to event:', event);
  }
}
