import { Component, OnInit, HostListener, ChangeDetectorRef } from '@angular/core';

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
    private cdr: ChangeDetectorRef,
    private router : Router
  ){
  }

  ngOnInit() {

    this.moduleId = this.moduleService.selectedModule;

    if(this.moduleId !== 0){

      this.resize();
      this.setStage();
      this.cdr.detectChanges();

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

          this.preloadImages(this.oddScene);
        }
        else{ // EVEN
          this.evenScene = new Scene(scene.id, scene.mId, scene.background, objects);

          this.evenAct = 1;
          this.evenPrev = 1;
          this.initial = true;

          this.preloadImages(this.evenScene);

        }

      });
    });
  }
  preloadImages(current: Scene){
    this.preloads = [];
    let scenes = [];
    for(const id of current.toPreload){
      let promise = this.sceneService.getSceneById(id);
      scenes.push(promise);
    }
    Observable.forkJoin(scenes).subscribe(res =>{
      const results = res as any[];

      let objects = [];
      for(const scene of results){
        const preScene = new Scene(scene.scene.id, scene.scene.mId, scene.scene.background, [ new SceneObject(
          0, 0, 'err', 'none',
          0, 0, 0, 0, 0,
          '', '', '0'
        ) ]);
        const bg = preScene.background;
        if(bg !== '' && bg.charAt(0) !== '#' && bg.charAt(0) !== 'r'){
          this.preloads.push(bg);
        }
        let promise = this.sceneService.getObjectsBySceneId(scene.scene.id);
        objects.push(promise);
      }
      Observable.forkJoin(objects).subscribe(res2 =>{
        const results2 = res2 as any[];
        for(const objects of results2){
          for(const obj of objects.objects){
            const pl = new SceneObject(
              obj.id, obj.sId, obj.type, obj.action,
              obj.x, obj.y, obj.w, obj.h, obj.z,
              obj.cont, obj.style, obj.event
            ).imageToPreload;
            if(pl !== '' && pl.charAt(0) !== '#' && pl.charAt(0) !== 'r'){
              this.preloads.push(pl);
            }
          }
        }

      });
    });
  }

  switch = false;

  oddScene = new Scene(0,0,"#000",[]);
  oddAct = 1;
  oddPrev = 1;
  oddPerm= "enabled";
  evenScene = new Scene(0,0,"#000",[]);
  evenAct = 1;
  evenPrev = 1;
  evenPerm= "enabled";

  initial = true;

  preloads:string[] = [];

  animOdd = "fade";
  animEven = "fade-out";

  getOddPerm(){
    return this.oddPerm;
  }
  getEvenPerm(){
    return this.evenPerm;
  }


  handleSceneClicks(input: string){
    const action = input.split(':');
    if( action[0] === "click"){
      if( action[1] === 'scene' ){
        if(this.switch){
          if( this.animEven === action[3] ) this.animEven = action[3] +"C";
          else this.animEven = action[3];
          if( this.animOdd === action[4] ) this.animOdd = action[4] +"C";
          else this.animOdd = action[4];
          this.oddPerm = "disabled";
          this.evenPerm = "enabled";
        }
        else{
          if( this.animOdd === action[3] ) this.animOdd = action[3] +"C";
          else this.animOdd = action[3];
          if( this.animEven === action[4] ) this.animEven = action[4] +"C";
          else this.animEven = action[4];
          this.oddPerm = "enabled";
          this.evenPerm = "disabled";
        }
        this.loadScene(+action[2]);
      }
      if(action[1] === 'event'){
        this.initial = false;
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

  // defCurs(e){
  //   console.log("def");
  //   document.body.style.cursor = e.buttons && e.button == 2 ? 'move' : 'default';
  // }

  activeOddEvent(obj: SceneObject): string{
    const events = obj.getEvents();
    let init: string = "deactive";
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
      init = "active";
    }
    else if(curr && !prev){
      init = "activated";
    }
    else if(!curr && prev){
      init = "deactivated";
    }
    else{
      init = "deactive";
    }

    if(obj.action.split(":")[0] === "click"){
      init+= " link";
    }

    return init;
  }
  activeEvenEvent(obj: SceneObject):string{
    const events = obj.getEvents();
    let init: string = "deactive";
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
      init = "active";
    }
    else if(curr && !prev){
      init = "activated";
    }
    else if(!curr && prev){
      init = "deactivated";
    }
    else{
      init = "deactive";
    }

    if(obj.action.split(":")[0] === "click"){
      init+= " link";
    }

    return init;
  }

  LOG(log:any){
    console.log(log);
  }

  container_min_height = 0;
  document_height = document.documentElement.clientHeight;
  document_width = document.documentElement.clientHeight;
  fsh = 0;
  fsw = 0;
  resize(){
    this.document_height = document.documentElement.clientHeight;
    this.document_width = document.documentElement.clientWidth;

    if(this.document_height < this.document_width/16*9){
      this.fsh = this.document_height;
      this.fsw = this.document_height/9*16;
    }else{
      this.fsw = this.document_width;
      this.fsh = this.document_width/16*9;
    }

    if(screen.height === window.innerHeight){
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
    this.cdr.detectChanges();
  }

}
