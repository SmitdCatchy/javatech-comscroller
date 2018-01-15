import { Injectable } from '@angular/core';

import { User } from '../models/User';

@Injectable()
export class UserService {

  user: User

  constructor() {
    this.user = new User(-1,"error","Guest","GUEST",[]);
    // this.user = new User(1,"debug","Catchy","ADMIN",[]);
    // this.user = new User(8,"debug","Catchy","USER",[]);
  }

  private users = [
    {
      'data' : new User(1,"admin","Master","ADMIN",[]),
      'pass' : 'admin'
    },
    {
      'data' : new User(2,"norbertbang","Opti","USER",[]),
      'pass' : 'admin'
    },
    {
      'data' : new User(8,"catchy","Catchy","USER",[]),
      'pass' : 'admin'
    },
    {
      'data' : new User(4,"szofia","Szofia","USER",[]),
      'pass' : 'admin'
    },
    {
      'data' : new User(5,"dudu","Dudu","USER",[]),
      'pass' : 'dudu'
    }
  ]

  login(username: string, password: string): string{
    for(let user of this.users){
      if(username === user.data.username){
        if(password === user.pass){
          this.user = user.data;
        }
        else return "Wrong password!";
      }
    }
    if(this.user.role === "GUEST"){
      return "User does not exist!";
    }
    return "";
  }

  logout(){
    this.user = new User(-1,"error","Guest","GUEST",[]);
  }

  register(name: string, nick: string, email: string, pass: string): string{
    for(let user of this.users){
      if(name === user.data.username){
        return "User already exists!";
      }
    }
    const newUser = new User(this.users.length, name, nick, "USER",[]);
    this.users.push({ 'data' : newUser, 'pass' : pass});
    this.user = newUser;
    return "";
  }

}
