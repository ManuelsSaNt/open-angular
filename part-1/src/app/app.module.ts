import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';

// modulo personalizado
import { ListModule } from './modules/list/list.module';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { FormularioComponent } from './components/forms/formulario/formulario.component';
import { FormularioAnidadoComponent } from './components/forms/formulario-anidado/formulario-anidado.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioArrayComponent } from './components/forms/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './components/forms/formulario-validado/formulario-validado.component';
import { PipesExampleComponent } from './components/pipes-example/pipes-example.component';
import { MultiplicaPipe } from './pipes/multiplica.pipe';
import { CalcPuntuacionPipe } from './pipes/calc-puntuacion.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ContactListComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent,
    PipesExampleComponent,
    MultiplicaPipe,
    CalcPuntuacionPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // modulo personalizado
    ListModule,

    // forumularios reactivos
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
