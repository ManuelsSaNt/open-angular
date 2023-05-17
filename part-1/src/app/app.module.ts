import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';

// modulo personalizado
import { ListModule } from './modules/list/list.module';
import { ContactListComponent } from './components/contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ContactListComponent,
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
