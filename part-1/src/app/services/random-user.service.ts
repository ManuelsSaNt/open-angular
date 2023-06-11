

import { Injectable } from '@angular/core';

import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }

  obtainRandomUser(): Observable<any> {
    return this.http.get('https://randomuser.me/api');
  }

  obtainRandomContacts(n: number): void {

  }

}
