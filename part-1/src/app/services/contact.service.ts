import { Injectable } from '@angular/core';

import { CONTACTS } from '../mocks/contactos.mock';
import { ContactoInterface } from '../models/contacto.interface';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  obtainContacts(): Promise<ContactoInterface[]> {
    return Promise.resolve(CONTACTS);
  }

  contactById(id: number): Promise<ContactoInterface> | undefined{
    const contact = CONTACTS.find( (C:ContactoInterface ) => C.id === id);

    if(contact !== undefined){
      return Promise.resolve(contact);
    }
    else{
      return Promise.reject("Error cabron no esta el usuario")
    }

  }

}
