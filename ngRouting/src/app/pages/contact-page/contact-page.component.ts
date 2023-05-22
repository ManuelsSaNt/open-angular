import { Component } from '@angular/core';
import { IContact } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {

  listaContactos: IContact[] = [
    {
      id: 0,
      name: 'juan',
      lastName: 'perez',
      email: 'wa@wa.com'
    },
    {
      id: 1,
      name: 'ana',
      lastName: 'rali',
      email: 'wa@wa.com'
    },
    {
      id: 2,
      name: 'charro',
      lastName: 'wewe',
      email: 'wa@wa.com'
    }
  ]

}
