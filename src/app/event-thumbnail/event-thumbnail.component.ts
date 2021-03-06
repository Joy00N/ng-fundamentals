import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input()
  event: any;


  @Output()
  eventClick = new EventEmitter();

  someProperty: any = 'some property';

  constructor() {
  }

  ngOnInit() {
  }

  handleClickMe() {
    this.eventClick.emit(this.event[0].name);
  }

  logFoo(){
    console.log('foo');
  }

}

