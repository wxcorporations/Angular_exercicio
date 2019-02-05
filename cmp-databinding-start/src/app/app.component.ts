import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private serverElements = [];
  private total() : number {
    return this.serverElements.length ;
  }

  private addServer( server : object ) : void
  {
    this.serverElements.push(server);
  }

  private selectFristIten() : void
  {
    this.total() ? this.serverElements[0].name = 'Changed' : null ;
  }

  private removeListItem() : void
  {
    this.serverElements = this.serverElements.splice(1, this.total() )
  }

}

