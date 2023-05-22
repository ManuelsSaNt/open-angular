import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit{

  myId = null;
  myName = null;
  myEmail = null;

  constructor(private myRoute: ActivatedRoute){

  }

  ngOnInit(): void {

    this.myRoute.params.subscribe(
      (params) => {
        if (params['id']){
          this.myId = params['id'];


        }
      }
    )

  }

}
