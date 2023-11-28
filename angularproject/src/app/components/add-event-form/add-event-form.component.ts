import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Events } from 'src/app/models/events';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-event',
  templateUrl: 'add-event-form.component.html',
  styleUrls: ['add-event-form.component.css'],
})
export class EventComponent {
  eventForm=this.fb.group({
    date:["",Validators.required],
    name:["",Validators.required],
    description:["",Validators.required],
    location:["",Validators.required],
    time:["",Validators.required]
    })
  events: any[] = [];
  newEvent: any = {};
  constructor(private eventService:EventsService,private fb:FormBuilder){}
  ngOnInit(){
    return(this.eventService.getAllEvents().subscribe(event=>this.events= event))
    
  }

  addEvent() {
    //const FormData:any=this.eventForm.getRawValue()as any
    //const temp:Events={name:FormData.Name,location:FormData.Location,description:FormData.Description,time:`${FormData.Date} ${FormData.Time}`}
//console.log(this.eventForm.get('date')?.value)
//console.log(this.eventForm.get('time')?.value)
    const dateTimeString=`${this.eventForm.get('date')?.value}T${this.eventForm.get('time')?.value}`
    const combineTime=new Date (dateTimeString);
    const formData:Events={name:this.eventForm.get('name')!.value as string,



        location:this.eventForm.get('location')!.value as string,
        description:this.eventForm.get('description')!.value as string,
        time:combineTime.toISOString()}

        console.log(formData)
    this.eventService.createEvent(formData).subscribe(x=>console.log(x));
    //this.events.push({ ...this.newEvent });
    //this.newEvent = {};
  }

  subscribe(event: any) {
    // Implement subscription logic here
    console.log('Subscribed to event:', event);
  }
}
