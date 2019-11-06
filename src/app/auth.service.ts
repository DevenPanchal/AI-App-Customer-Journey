import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response } from '@angular/http';
import { User } from "./User.model";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { AppComponent } from "./app.component";

import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(public http: HttpClient) { }

  public logIn(user: User) {


    // creating base64 encoded String from user name and password
    var base64Credential: string = btoa(user.username + ':' + user.password);
    let options = {
      headers: new HttpHeaders({

        'Accept': 'application/json',
        "Authorization": "Basic " + base64Credential
      })
    }

    return this.http.get(AppComponent.API_URL + "/account/login", options)
      .pipe(map((response: any) => {
        console.log('The response is ', response);
        // login successful if there's a jwt token in the response
        let user = response.principal;// the returned user object is a principal object
        console.log('The principal is ', user);
        if (user) {
          // store user details  in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      }));
  }

  logOut() {
    // remove user from local storage to log user out
    return this.http.post(AppComponent.API_URL + "/logout", {}).pipe(map((response: Response) => {
      localStorage.removeItem('currentUser');
    }));



  }
}
