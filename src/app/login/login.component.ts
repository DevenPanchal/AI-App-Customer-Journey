import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../User.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {

  //Static API_URL does not matter right now.
  static API_URL = "http://localhost:8080";

  user: User = new User();
  errorMessage: string;

  sampleuser: User = new User(1, "dp023n", "Deven", "Middletown,NJ", "mypass", "Senior", "MS");

  currentUser: User;

  constructor(private authService: AuthService, private router: Router) { }




  ngOnInit() {
  }



  loginbypass() {
    // setting this user into localStorage for demo purpose only.

    localStorage.setItem('currentUser', JSON.stringify(this.sampleuser));

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.router.navigate(['/home']);

  }

  login() {
    this.authService.logIn(this.user)
      .subscribe(data => {
        this.router.navigate(['/home']);
      }, err => {
        this.errorMessage = "Error :  Username or password is incorrect";
      }
      )
  }



}
