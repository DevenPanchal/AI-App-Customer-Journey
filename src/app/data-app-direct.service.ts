import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataAppDirectService {

  uri = 'http://deven1.research.att.com:3332';  // url of the backend
  constructor(private http: HttpClient) { }

  predict() {

    let options = {
      headers: new HttpHeaders({

        'Accept': 'application/json',
        "Content-Type:": 'application/json'
      })
    };

    let body = {
      "petal_length": [0], "petal_width": [0], "sepal_length": [0], "sepal_width": [0]
    };
    
    return this.http.post(`${this.uri}/model/methods/classify`, body,options);


  }

  
  }
