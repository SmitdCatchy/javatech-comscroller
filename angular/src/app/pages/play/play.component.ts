import { Component, OnInit, HostListener } from '@angular/core';

import { ModuleService } from '../../services/module.service';
import { SceneService } from '../../services/scene.service';
import { UserService } from "../../services/user.service";
import { Module } from '../../models/Module';
import { Scene, SceneObject } from '../../models/Scene';

import {ActivatedRoute, Router} from "@angular/router";

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  constructor(
    private moduleService: ModuleService,
    private sceneService: SceneService,
    public userService: UserService,
    private route: ActivatedRoute,
    private router : Router
  ){
  }

  ngOnInit() {

    this.resize();
    this.setStage();

    this.moduleId = this.moduleService.selectedModule;

    if(this.moduleId !== 0){
      this.moduleService.getModuleById(this.moduleId).subscribe(result => {

        let t = result.module;
        this.currentModule = new Module(
          t.id, t.owner, t.name, t.type, t.description, t.image,
          t.startscene, t.isPublic, t.finished, t.approved,
          t.approvedBy, t.published, t.views, t.rate
        );

        // this.sceneId = this.currentModule.startscene;
        this.loadScene(this.currentModule.startscene);

      });
    }
    else {
      this.router.navigate(['modules']);
    }
  }

  moduleId: number;
  currentModule: Module;

  loadScene(sceneId: number){
    this.sceneService.getSceneById(sceneId).subscribe(result => {
      this.sceneService.getObjectsBySceneId(sceneId).subscribe(res => {

        this.switch = !this.switch;

        let scene = result.scene;
        const loopable : any = res.objects;
        let objects = [];
        for(const obj of loopable){
          objects.push(
            new SceneObject(
              obj.id, obj.sId, obj.type, obj.action,
              obj.x, obj.y, obj.w, obj.h, obj.z,
              obj.cont, obj.style, obj.event
            )
          );
        }

        if(this.switch){ //ODD
          this.oddScene = new Scene(scene.id, scene.mId, scene.background, objects);

          this.oddAct = 1;
          this.oddPrev = 1;
          this.initial = true;
        }
        else{ // EVEN
          this.evenScene = new Scene(scene.id, scene.mId, scene.background, objects);

          this.evenAct = 1;
          this.evenPrev = 1;
          this.initial = true;
        }

        console.log("odd:"+this.switch);

      });
    });
  }

  switch = false;
  // sceneId: number;
  oddScene = new Scene(0,0,"#000",[]);
  oddAct = 1;
  oddPrev = 1;
  evenScene = new Scene(0,0,"#000",[]);
  evenAct = 1;
  evenPrev = 1;

  initial = true;

  animOdd = "fade";
  animEven = "fade-out";


  handleSceneClicks(input: string){
    this.initial = false;
    const action = input.split(':');
    if( action[0] === "click"){
      if( action[1] === 'scene' ){
        if(this.switch){
          if( this.animEven === action[3] ) this.animEven = action[3] +"C";
          else this.animEven = action[3];
          if( this.animOdd === action[4] ) this.animOdd = action[4] +"C";
          else this.animOdd = action[4];
        }
        else{
          if( this.animOdd === action[3] ) this.animOdd = action[3] +"C";
          else this.animOdd = action[3];
          if( this.animEven === action[4] ) this.animEven = action[4] +"C";
          else this.animEven = action[4];
        }
        this.loadScene(+action[2]);
      }
      if(action[1] === 'event'){
        if(this.switch){
          if(this.oddAct !== +action[2]){
            this.oddPrev = this.oddAct;
            this.oddAct = +action[2];
          }
        }
        else{
          if(this.evenAct !== +action[2]){
            this.evenPrev = this.evenAct;
            this.evenAct = +action[2];
          }
        }
      }
    }
  }

  getOddAct():string{
    if(this.initial) {
      return "pas" + this.oddAct;
    }
    else{
      return "act" + this.oddAct;
    }
  }
  getEvenAct():string{
    if(this.initial) {
      return "pas" + this.evenAct;
    }
    else{
      return "act" + this.evenAct;
    }
  }

  activeOddEvent(events: number[]){
    let init: string = "0";
    let curr = false;
    let prev = false;
    for(let e of events){
      if( e === this.oddAct) {
        curr = true;
      }
      if( e === this.oddPrev) {
        prev = true;
      }
    }
    if(curr && prev){
      init = "stay";
    }
    else if(curr){
      init = "" + this.oddAct;
    }
    else{
      if(this.oddAct < 5) init = "" + (this.oddAct + 1);
      else                    init = "" + (this.oddAct - 1);
    }
    return "event"+init;
  }
  activeEvenEvent(events: number[]){
    let init: string = "0";
    let curr = false;
    let prev = false;
    for(let e of events){
      if( e === this.evenAct) {
        curr = true;
      }
      if( e === this.evenPrev) {
        prev = true;
      }
    }
    if(curr && prev){
      init = "stay";
    }
    else if(curr){
      init = "" + this.evenAct;
    }
    else{
      if(this.evenAct < 5) init = "" + (this.evenAct + 1);
      else                    init = "" + (this.evenAct - 1);
    }
    return "event"+init;
  }

  LOG(log:any){
    console.log(log);
  }

  container_min_height = 0;
  document_height = document.documentElement.clientHeight;
  document_width = document.documentElement.clientHeight;
  resize(){
    this.document_height = document.documentElement.clientHeight;
    this.document_width = document.documentElement.clientWidth;

    if(screen.height === window.innerHeight){
      console.log("fullscreen");
      this.fullscreen = true;
      this.fullscreenOnce = true;
    }
    else{
      this.fullscreen = false;
      this.fullscreenOnce = true;
    }

    this.container_min_height = this.document_height - 120;
  }

  stageX : number;
  stageY : number;
  stageW : number;
  stageH : number;

  fullscreen = false;
  fullscreenOnce = false;

  resizeCorrection():number{
    console.log(0);

    this.fullscreenOnce = false;
    setTimeout(()=>{
      this.setStage();
    }, 0);
    return 1;
  }

  setStage(){
    this.stageX = document.getElementById("stage").offsetLeft;
    this.stageY = document.getElementById("stage").offsetTop;
    this.stageW = document.getElementById("stage").offsetWidth;
    this.stageH = document.getElementById("stage").offsetHeight;
  }
  @HostListener('window:resize', ['$event']) onResize(event){
    this.resize();
    this.setStage();
  }

}
