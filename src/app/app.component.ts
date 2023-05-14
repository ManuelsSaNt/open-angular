import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'openAngular';
  usuario = "jose";


  //  seejecuta cuando en el hijo saludo component se pulse u boton
  getMessageFromChild(event: string) {
    alert(event);
  }

}
