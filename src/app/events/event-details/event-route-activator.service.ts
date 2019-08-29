import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Inject, Injectable } from '@angular/core';

import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(
    @Inject(EventService) private eventService: EventService,
    @Inject(Router) private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getEvent(+route.params.id);

    if (!eventExists) {
      this.router.navigate(['/404']);
    }

    return eventExists;
  }
}
