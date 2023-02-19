import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  submitUser(dt: any){
    sessionStorage.setItem('token', dt);

    // let currentUser = JSON.parse(sessionStorage.getItem('token') || '{}');
    let currentUser = sessionStorage.getItem('token');
    console.log(currentUser);
  }
}
