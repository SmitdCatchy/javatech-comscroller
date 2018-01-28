import { Injectable } from '@angular/core';

import { AbstractControl, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { ModuleService } from './module.service';
import { SceneService } from './scene.service';
import { UserService } from "./user.service";
import { Module } from '../models/Module';
import { Scene, SceneObject } from '../models/Scene';
import { User } from '../models/User';

import {ActivatedRoute, Router} from "@angular/router";
import {Routes, Server} from "../utils/ServerRoutes";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class EditorService {

  selectedModule = 0;
  user: User

  constructor(
    private moduleService: ModuleService,
    private sceneService: SceneService,
    public userService: UserService,
    private route: ActivatedRoute,
    private router : Router,
    public http: Http
  ){}

  setAll(){

  }


}
