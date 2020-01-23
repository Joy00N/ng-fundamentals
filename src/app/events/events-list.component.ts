import {Component} from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: 'events-list.component.html'
})
export class EventsListComponent {

  event1 = [{
      id: 1,
      name: 'Angular Connect'
    },
    {
      id: 2,
      name: 'Angular Meetup'
    }];

  handleEventClicked(val){
    console.log(val);
  }
}
