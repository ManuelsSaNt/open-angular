import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges {

  @Input()
  name: string = "juan";

  @Output()
  messageEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {

  }

  // antes de renderizar
  ngOnInit(): void {
    console.log("Me inicie hola (Saludo)");
  }

  // cuando cambie ya renderizado
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Cuando Cambia (Saludo)", changes);
  }

  // cuando se destruya
  ngOnDestroy(): void {
    console.log("Cuando se destruye (Saludo)");
  }


  /*
    ejemplo evento click para un evento para enviar un texto al apdre
  */
  sendMessageToFather(): void {
    this.messageEmitter.emit(`Hola. ${this.name}, alerta despachada desde un emiter`);
  }

  /*

  ! ciclo de vida del componente

  * 1.- ngOnChanges
  * 2.- ngOnInit
  3.- ngAfterContentInit
  4.- ngAfterContentChecked
  5.- ngAfterViewInit
  6.- ngAfterViewChecked
  7.- ngAfterContentChecked
  8.- ngAfterViewChecked
  * 9.- ngOnDestroy

  */


}
