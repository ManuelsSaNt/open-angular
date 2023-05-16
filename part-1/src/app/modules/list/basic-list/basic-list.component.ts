import { Component, OnInit } from '@angular/core';

// tipo base para el ejemplo
export type Producto = {
  name: string;
  price: number;
  descritpion: string;
}


@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.css']
})
export class BasicListComponent implements OnInit{

  cargando: boolean = false;

  elementsList: Producto[] = [
    {
      name: 'leche',
      price: 10,
      descritpion: 'leche entera'
    },
    {
      name: 'carne',
      price: 20,
      descritpion: 'carne de cerdo'
    }
  ];


  constructor(){}

  ngOnInit(){

    // setTimeout(() => {

    // })

  }

  changeLoad() {
    this.cargando = !this.cargando;
  }

}
