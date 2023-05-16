import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';

// modulo personalizado
import { ListModule } from './modules/list/list.module';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // modulo personalizado
    ListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
