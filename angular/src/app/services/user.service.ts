import { Injectable } from '@angular/core';

import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

import { User } from '../models/User';

import {ActivatedRoute, Router} from "@angular/router";
import {Routes, Server} from "../utils/ServerRoutes";

@Injectable()
export class UserService {

  user: User

  constructor(private http: Http, private route: ActivatedRoute ) {
    // this.user = new User(-1,"error","Guest","GUEST",[]);
    this.user = new User(1,"debug","Catchy","ADMIN",[]);
    // this.user = new User(8,"debug","Catchy","ADMIN",[]);
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
      'data' : new User(3,"nandi","Nándor Úr","USER",[]),
      'pass' : 'nandi'
    },
    {
      'data' : new User(4,"szofia","Szofia","USER",[]),
      'pass' : 'admin'
    },
    {
      'data' : new User(5,"dudu","Dudu","USER",[]),
      'pass' : 'dudu'
    },
    {
      'data' : new User(6,"uhul","Uhul","USER",[]),
      'pass' : 'uhul'
    },
    {
      'data' : new User(7,"bence","Bence","USER",[]),
      'pass' : 'bence'
    },
    {
      'data' : new User(8,"catchy","Catchy","USER",[]),
      'pass' : 'admin'
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

  // FOLDER

  uploadFiles(files: FileList): Observable<any> {

    const formData: FormData = new FormData();

    formData.append('id', ''+this.user.id);

    for( let i = 0; i < files.length; i++ ){
      formData.append('file', files.item(i), files.item(i).name);
    }

    return this.http.post(Server.routeTo(Routes.FILE_UPLOAD), formData)
      .map(res => res.json());
  }

  getFiles(): Observable<any> {
  return this.http.get(Server.routeTo(Routes.FILE_LIST) + this.user.id)
    .map(res => res.json())
  }
  deleteFile( file: string ): Observable<any>{
    return this.http.delete(Server.routeTo(Routes.FILE_DELETE) + this.user.id + '/' + file)
    .map(res => res.json())
  }


}
