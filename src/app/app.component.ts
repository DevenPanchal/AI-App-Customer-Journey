import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from './User.model';
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import{LoginComponent} from './login/login.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class AppComponent {
  title = 'frontend';
  //Static API_URL does not matter right now.
  static API_URL = "http://localhost:8080";

  user: User = new User();
  bridge:any;

  currentUser: User;

  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {

    // get the sample suer stored in localstore by loginbypass method in login component
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }


  ngOnInit() {
  }

  ngOnChange() {


  }

    // logout from the app
    logOut() {
      console.log('Logout request received');
      this.authService.logOut()
        .subscribe(
          data => {
            console.log('The Auth service finished logout');
            this.router.navigate(['/login']);
          },
          error => {
  
          });
    }



}