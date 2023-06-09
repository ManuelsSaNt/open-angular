import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    const maToken = sessionStorage.getItem('token');

    if(maToken){
      this.router.navigate(['home']);
    }

  }

  logUser(){
    sessionStorage.setItem('token', '1');
  }

}
