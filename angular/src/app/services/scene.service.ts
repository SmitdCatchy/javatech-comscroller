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
export class SceneService {

  selectedScene = 0;

  constructor( private http: Http, private route: ActivatedRoute, private userService: UserService ) { }

  createSceneByModuleId( id: number ): Observable<any>{
    let send = {
      "mId" : id
    };
    return this.http.post(Server.routeTo(Routes.SCENE_CREATE),send)
    .map(res => res.json())
  }
  getSceneById(id: number): Observable<any> {
  return this.http.get(Server.routeTo(Routes.SCENE_GET_ID) + id)
    .map(res => res.json())
  }
  getScenesByModuleId(id: number): Observable<any> {
  return this.http.get(Server.routeTo(Routes.SCENE_GET_MID) + id)
    .map(res => res.json())
  }
  updateSceneById( id: number, background: string ): Observable<any>{
    let send = {
      "id" : id,
      "background" : background
    };
    return this.http.put(Server.routeTo(Routes.SCENE_UPDATE),send)
    .map(res => res.json())
  }
  deleteSceneById( id: number ): Observable<any>{
    return this.http.delete(Server.routeTo(Routes.SCENE_DELETE) + id)
    .map(res => res.json())
  }
//
// // SCENE OBJECTS
  createSceneObjectBySceneId( id: number ): Observable<any>{
    let send = {
      "sId" : id
    };
    return this.http.post(Server.routeTo(Routes.OBJECT_CREATE),send)
    .map(res => res.json())
  }

  getObjectsBySceneId(id: number): Observable<any> {
  return this.http.get(Server.routeTo(Routes.OBJECT_GET_SID) + id)
    .map(res => res.json())
  }
  updateSceneObjectById( obj: any ): Observable<any>{
    return this.http.put(Server.routeTo(Routes.OBJECT_UPDATE), obj)
    .map(res => res.json())
  }
deleteSceneObjectById( id: number ): Observable<any>{
  return this.http.delete(Server.routeTo(Routes.OBJECT_DELETE) + id)
  .map(res => res.json())
}

}
