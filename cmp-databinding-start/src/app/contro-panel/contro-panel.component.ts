import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'contro-panel',
  templateUrl: './contro-panel.component.html',
  styleUrls: ['./contro-panel.component.css']
})
export class ControPanelComponent implements OnInit {

  @Output()
  private removeItem = new EventEmitter();

  @Output()
  private changeFrist = new EventEmitter();

  private changeFristIten(lista: string[]) {
    this.changeFrist.emit(lista);
  }

  private removeServer(lista: string[]) {
    this.removeItem.emit(lista);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
