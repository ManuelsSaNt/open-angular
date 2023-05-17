import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ContactoInterface } from 'src/app/models/contacto.interface';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{

  // all contact
  contactList: ContactoInterface[] = [];
  oneContact: ContactoInterface | undefined = undefined;

  constructor( private contactService: ContactService ) {}

  ngOnInit(): void {

    // obtener lista de contactos que nos brinca el servicio
    this.contactService.obtainContacts().then( (list: ContactoInterface[]) => {
      this.contactList = list;
    } ).catch( err => {console.log(`hubo un error: ${err}`);
    })

    this.contactService.contactById(2)?.then( (data: ContactoInterface) => {
      this.oneContact = data;
    });

  }
}
