import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from '../shared/event.service';
import { IEvent } from '../shared';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
    .container {
      padding-left: 20px;
      padding-right: 20px;
    }
    .event-image {
      height: 100px;
    }
  `]
})
export class EventDetailsComponent {
  event: IEvent;

  constructor(
    @Inject(EventService) private eventService: EventService,
    @Inject(ActivatedRoute) private route: ActivatedRoute) {}

  ngOnInit() {
    this.event = this.eventService.getEvent(
      +this.route.snapshot.params.id
    );
  }
}
