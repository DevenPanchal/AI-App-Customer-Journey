import { Injectable } from '@angular/core';
import { User } from "./User.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from "./app.component";

@Injectable()
export class AccountService {

  uri = 'http://127.0.0.1:3331';
  constructor(public http: HttpClient) { }



  /* Gets http://localhost:8080/api/job/{id}*/
  scoreModel(embed: any) {


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.post('http://localhost:10000/'+`${this.uri}/model/methods/classify`, embed, httpOptions);
  }


}
