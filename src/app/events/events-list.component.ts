import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { IEvent } from './shared';

@Component({
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr>
      <div class="row">
        <div
          *ngFor="let event of events"
          class="col-md-5"
        >
          <app-event-thumbnail
            (click)="handleThumbnailClick(event.name)"
            [event]="event"
          >
          </app-event-thumbnail>
        </div>
      </div>
    </div>
  `
})
export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(
    @Inject(EventService) private eventService: EventService,
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    @Inject(ToastrService) private toastr: ToastrService) {
  }

  ngOnInit() {
    // this.eventService.getEvents().subscribe(
    //   events => {
    //     this.events = events;
    //   }
    // );
    this.events = this.route.snapshot.data.events;
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
