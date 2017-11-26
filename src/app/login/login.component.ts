import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: any = {};
  error='';
   constructor(private router: Router ) { }

  ngOnInit() {
  }

  doLogin(){
    var username = this.login.username;
    var password = this.login.password;
    if(username=='admin' && password=='admin'){
       console.log("Login success");
       this.error='';
       this.router.navigate(['App']);
    }else{
     console.log("Login Failed");
       this.error = 'Username or password is incorrect';
    }
  }

}
