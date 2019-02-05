import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'server-elements',
  templateUrl: './server-elements.component.html',
  styleUrls: ['./server-elements.component.css']
})
export class ServerElementsComponent implements OnInit {

  @Input()
  private element: {
    name: string,
    type: string,
    content: string;
  };

  constructor() {
  }

  ngOnInit() {
  }

}
