import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IContact } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  selectedContac: IContact | undefined = undefined;

  token: string | null = null;

  constructor(private router: Router){

  }

  ngOnInit(): void {
    if (history.state.data){
      console.table(history.state.data)
      this.selectedContac = history.state.data;
    }
    this.token = sessionStorage.getItem('token');
  }

  navigateContacts(): void {

    let _NavigationExtras: NavigationExtras = {
      queryParams: {
        sexo: 'mujer'
      }
    }

    this.router.navigate(['contacts']);
  }
}
