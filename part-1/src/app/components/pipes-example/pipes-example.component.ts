import { Component, OnInit } from '@angular/core';
import { IPlayer } from 'src/app/models/player.interface';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {

  dob: Date = new Date(1991,9,14);
  change: boolean = true;

  pla1: IPlayer = {
    name: 'Martin',
    points: [10, 30, 40, 0]
  }

  pla2: IPlayer = {
    name: 'pepe',
    points: [1,35,23,14]
  }

  PI: number = 3.1416592653

  carPrice: number = 1203;

  constructor() { }

  ngOnInit(): void {

  }

  get dateFormat() {
    return this.change ? 'shortDate' : 'fullDate'
  }

  changeFormat() {
    this.change = !this.change;
  }

}
