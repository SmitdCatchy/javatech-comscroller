import { Injectable } from '@angular/core';

import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

import { Module } from '../models/Module';
import { Scene, SceneObject } from '../models/Scene';
import { User } from '../models/User';

import { UserService } from "./user.service";

import {ActivatedRoute, Router} from "@angular/router";
import {Routes, Server} from "../utils/ServerRoutes";

@Injectable()
export class ModuleService {

  selectedModule = 0;
  // selectedModule = 1;
  // selectedModule = 53;

  constructor( private http: Http, private route: ActivatedRoute, private userService: UserService ){}
// CREATE
  createModule( name: string, type: string, desc: string, img: string ): Observable<any>{
    let send = {
      "owner" : this.userService.user.id,
      "name" : name,
      "type" : type,
      "description" : desc,
      "image" : img
    };
    return this.http.post(Server.routeTo(Routes.MODULE_CREATE),send)
    .map(res => res.json())
  }
// READ
  getModuleById(id: number): Observable<any>{
    console.log
    return this.http.get(Server.routeTo(Routes.MODULE_GET_ID) + id)
    .map(res => res.json())
  }
  getModules(): Observable<any> {
  return this.http.get(Server.routeTo(Routes.MODULE_GET_ALL))
    .map(res => res.json())
  }
// UPDATE
  updateModule( id: number, name: string, type: string, desc: string, img: string, isPublic: number, finished: number ): Observable<any>{
    let send = {
      "id" : id,
      "name" : name,
      "type" : type,
      "description" : desc,
      "image" : img,
      "isPublic" : isPublic,
      "finished" : finished
    };
    return this.http.put(Server.routeTo(Routes.MODULE_UPDATE),send)
    .map(res => res.json())
  }
  rateModule( id: number, rate: number ): Observable<any>{
    let send = {
      "id" : +id,
      "rate" : +rate,
    };
    return this.http.put(Server.routeTo(Routes.MODULE_RATE),send)
    .map(res => res.json())
  }
  approveModule( id: number ): Observable<any>{
    let send = {
      "id" : +id,
      "by" : +this.userService.user.id,
    };
    return this.http.put(Server.routeTo(Routes.MODULE_APPROVE),send)
    .map(res => res.json())
  }
  disapproveModule( id: number ): Observable<any>{
    let send = {
      "id" : +id,
      "by" : +this.userService.user.id,
    };
    return this.http.put(Server.routeTo(Routes.MODULE_DISAPPROVE),send)
    .map(res => res.json())
  }
//DELETE
  deleteModule( id: number ): Observable<any>{
    return this.http.delete(Server.routeTo(Routes.MODULE_DELETE) + id)
    .map(res => res.json())
  }

}
