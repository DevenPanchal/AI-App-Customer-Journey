import { Component, OnInit } from '@angular/core';
import { User } from '../User.model';
import { Embeddings } from '../embeddings.model';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AccountService } from '../account.service';

import { D0embed } from '../d0embed';
import { D1embed } from '../d1embed';
import { D2embed } from '../d2embed';
import { D3embed } from '../d3embed';
import { D4embed } from '../d4embed';
import { D5embed } from '../d5embed';
import { D6embed } from '../d6embed';
import { D7embed } from '../d7embed';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})


export class HomePageComponent implements OnInit {

  showdirectPredict = false;
  modelResponse: any;
  lastResponse:any;
  
  dee0: any;
  dee1: any;
  dee2: any;
  dee3: any;
  dee4: any;
  dee5: any;
  dee6: any;
  dee7: any;



  ed0: D0embed;
  ed1: D1embed;
  ed2: D2embed;
  ed3: D3embed;
  ed4: D4embed;
  ed5: D5embed;
  ed6: D6embed;
  ed7: D7embed;


  d0: D0embed[] = [];
  d1: D1embed[] = [];
  d2: D2embed[] = [];
  d3: D3embed[] = [];
  d4: D4embed[] = [];
  d5: D5embed[] = [];
  d6: D6embed[] = [];
  d7: D7embed[] = [];

  embedding: Embeddings = new Embeddings();// initiate all arrays in this model via constructor or here
  modelResponseString: any;

  constructor(private serv: AccountService) {

  }

  ngOnInit() {
  }


  makepredictrequest() {


    this.ed0 = this.dee0;
    this.ed1 = this.dee1;
    this.ed2 = this.dee2;
    this.ed3 = this.dee3;
    this.ed4 = this.dee4;
    this.ed5 = this.dee5;
    this.ed6 = this.dee6;
    this.ed7 = this.dee7;

    this.embedding.d0.push(this.ed0)
    this.embedding.d1.push(this.ed1);
    this.embedding.d2.push(this.ed2);
    this.embedding.d3.push(this.ed3);
    this.embedding.d4.push(this.ed4);
    this.embedding.d5.push(this.ed5);
    this.embedding.d6.push(this.ed6);
    this.embedding.d7.push(this.ed7);


    this.serv.scoreModel(this.embedding).subscribe((data: any) => {

      this.modelResponse = data['value'];
      console.log('Request finished');
      this.lastResponse= this.modelResponse[this.modelResponse.length-1];
      console.log('The data received is :' + this.lastResponse);
     


    });

  }

  show() {
    this.showdirectPredict = true;
  }

  dontshow() {
    this.showdirectPredict = false;
  }

}
