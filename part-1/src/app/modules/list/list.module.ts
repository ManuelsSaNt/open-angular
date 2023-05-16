import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicListComponent } from './basic-list/basic-list.component';


/*
  los modulos osn contenedores de componentes
*/

@NgModule({
  // componentes de este modulo
  declarations: [
    BasicListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // exportamos todo lo q quermaos compartir compoenntes pipes services etc
    BasicListComponent
  ]
})
export class ListModule { }
