import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContact } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit{

  listaContactos: IContact[] = [
    {
      id: 0,
      name: 'juan',
      lastName: 'perez',
      email: 'wa@wa.com',
      sexo: 'hombre'
    },
    {
      id: 1,
      name: 'ana',
      lastName: 'rali',
      email: 'wa@wa.com',
      sexo: 'mujer'
    },
    {
      id: 2,
      name: 'charro',
      lastName: 'wewe',
      email: 'wa@wa.com',
      sexo: 'hombre'
    }
  ]

  constructor(private router: Router, private actualRoute: ActivatedRoute){

  }

  ngOnInit(){

    // obetener los queryParams

    this.actualRoute.queryParams.subscribe((params) => {
      console.log(params['sexo'])
    })

  }

  // ejemplo de paso de info entre componentes a traves del estado
  volverAHome(contacto: IContact) {

    const navigationExtras: NavigationExtras = {
      state: {
        data: contacto
      }
    }

    this.router.navigate(['/home'], navigationExtras);
  }

}

