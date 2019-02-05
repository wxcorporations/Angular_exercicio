import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output()
  private sentData = new EventEmitter();

  private dataServer(_name: string, _type: string, _content: string) {
    return {name: _name, type: _type, content: _content}
  }

  constructor() {
  }

  ngOnInit() {
  }

  private clearInputs(...arr): void {
    Array.prototype.forEach.call(arguments, function (item) {
      item.value = '';
    })
  }

  onAddServer(nameServer: HTMLInputElement, contentServer: HTMLInputElement) {
    let strNameServer = nameServer.value,
      strContentServer = contentServer.value;

    if (strNameServer && strContentServer) {
      this.sentData.emit(
        this.dataServer(strNameServer, 'server', strContentServer)
      )
      ;
      this.clearInputs(nameServer, contentServer);
      nameServer.focus();
    }
  }

  onAddBlueprint(nameServer, contentServer) {
    let strNameServer = nameServer.value,
    strContentServer = contentServer.value;

    if (strNameServer && strContentServer) {
      this.sentData.emit(
        this.dataServer(strNameServer, 'blueprint', strContentServer)
      );
      this.clearInputs(nameServer, contentServer);
      nameServer.focus();
    }
  }


}
