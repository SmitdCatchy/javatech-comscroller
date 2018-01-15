import { Component } from '@angular/core';

import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loginUser = "";
  loginPass = "";
  err: string;

  regName = "";
  regNick = "";
  regMail = "";
  regPass = "";
  rerr: string;

  constructor( private userService: UserService){}

  login(){
    this.err = this.userService.login(this.loginUser, this.loginPass);
    if(this.err === ""){
      this.loginUser = "";
      this.loginPass = "";
    }
  }
  logout(){
    this.userService.logout();
  }
  register(){
    this.rerr = this.userService.register(this.regName, this.regNick, this.regMail, this.regPass);
    if(this.rerr === ""){
      this.loginUser = "";
      this.loginPass = "";
    }
  }
}
