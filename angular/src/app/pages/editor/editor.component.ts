import { Component, OnInit, AfterViewChecked, HostListener, Renderer2, ChangeDetectorRef } from '@angular/core';

import { ModuleService } from '../../services/module.service';
import { SceneService } from '../../services/scene.service';
import { UserService } from "../../services/user.service";
import { Module } from '../../models/Module';
import { Scene, SceneObject } from '../../models/Scene';

import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, AfterViewChecked {

  constructor(
    private moduleService: ModuleService,
    private sceneService: SceneService,
    public userService: UserService,
    private route: ActivatedRoute,
    private router : Router,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ){
  }

  ngOnInit() {


    this.resize();

    this.moduleId = this.moduleService.selectedModule;

    if(this.moduleId !== 0){

    //PROPERTIES
    this.moduleService.getModuleById(this.moduleId).subscribe(result => {

      let t = result.module;
      this.current = new Module(
        t.id, t.owner, t.name, t.type, t.description, t.image,
        t.startscene, t.isPublic, t.finished, t.approved,
        t.approvedBy, t.published, t.views, t.rate
      );

      this.moduleName = this.current.name;

      if(this.current.type === "Comic"){
        this.selectedId = 0;
        this.selectedType.name = "Comic";
        this.selectedType.id = 1;
      }
      if(this.current.type === "Adventure"){
        this.selectedId = 1;
        this.selectedType.name = "Adventure";
        this.selectedType.id = 2;
      }
      if(this.current.type === "Novel"){
        this.selectedId = 2;
        this.selectedType.name = "Novel";
        this.selectedType.id = 3;
      }

      this.moduleImg = this.current.image;
      this.moduleImgDisp = this.current.imageToLoad;
      this.moduleDesc = this.current.description;
      this.isPublic = this.current.isPublic;
      this.isFinished = this.current.finished;
    //GRAPH
      this.startId = this.current.startscene;
      this.fillArrays(false, []);
    });
    }
  }

  ngAfterViewChecked(){
    if(this.graph_active) this.drawLines();
    this.cdr.detectChanges();
  }

  // EDITOR
  sum_active = false;
  prop_active = false;
  graph_active = false;
  blueprint_active = true;
  canvas_active = false;
  folder_active = false;
  switch(w : string){
    if(w === "p") this.prop_active = !this.prop_active;
    if(w === "g") this.graph_active = !this.graph_active;
    if(w === "b") this.blueprint_active = !this.blueprint_active;
    if(w === "c") this.canvas_active = !this.canvas_active;
    if(w === "f") this.folder_active = !this.folder_active;


    if(this.graph_active)setTimeout(()=>{ this.drawLines(); }, 10);
    if(this.blueprint_active)setTimeout(()=>{ this.setCanvas(); }, 10);
    if(this.canvas_active)setTimeout(()=>{ this.setCanvasDisplay(); }, 10);

    if(
      this.prop_active === false &&
      this.graph_active === false &&
      this.blueprint_active === false &&
      this.canvas_active === false &&
      this.folder_active === false
    ) this.prop_active = true;
    // ) this.sum_active = true;
    // else this.sum_active = false;
  }
  //PROPERTIES
  current : Module;
  moduleId : number;
  moduleName = "";
  moduleImg = "";
  moduleImgDisp ="";
  moduleDesc = "";
  isPublic = 0;
  isFinished = 0;
  types = [
    { id : 1, name : 'Comic' },
    { id : 2, name : 'Adventure' },
    { id : 3, name : 'Novel' }
  ]
  selectedType: { [key: string]: any } = {
    id : 0,
    name: "none"
  };
  selectedId: number;

  onSelectionChange(type) {
    this.selectedType = Object.assign({}, this.selectedType, type);
  }
  invalid(){
    if(this.moduleName === '')return true;
    if(this.selectedType.id === 0)return true;
    return false;
  }
  setModule(){
    let createDesc = this.moduleDesc;
    let createImg = this.moduleImg;
    if( createDesc === "" ){
      createDesc = "Default description.";
    }
    if( createImg === "" ){
      createImg = "images/smitd_logo.png";
    }
    this.moduleService.updateModule(
      this.moduleId, this.moduleName, this.selectedType.name, createDesc , createImg,
      this.isPublic, this. isFinished
    ).subscribe(result => {
      if(this. isFinished){
        this.router.navigate(['modules']);
      }

      this.ngOnInit();
    });
  }
  createModule(){
    let createDesc = this.moduleDesc;
    let createImg = this.moduleImg;
    if( createDesc === "" ){
      createDesc = "Default description.";
    }
    if( createImg === "" ){
      createImg = "images/smitd_logo.png";
    }
    this.moduleService.createModule( this.moduleName, this.selectedType.name, createDesc , createImg ).subscribe(result => {
      if(result.err){
        this.moduleName = "";
      }
      else{
        this.router.navigate(['editor/'+ this.moduleName]);
        this.moduleService.selectedModule = result.moduleId;
        this.ngOnInit();
      }
    });
  }
  //GRAPH

  currentScene = {
    "id" : 0,
    "background" : "none",
  };
  startId = 0;
  scenes= [];
  canvasScenes= [];
  nodes = [];
  links = [];
  pos_nodes = [[]];
  isolated = [];
  sceneId = -1;

  fillArrays( update: boolean, data: any[]){
    let scenesT = [];
    let canvasScenesT = [];
    let nodesT = [];
    let linksT = [];
    let isolatedT = [];
    let objectsT = []


    this.sceneService.getScenesByModuleId(this.moduleId).subscribe(result => {
      let promises = [];
      for(const scene of result.scenes){
        let promise = this.sceneService.getObjectsBySceneId(scene.id);
        promises.push(promise);
      }
      //  scene sceneobject separation!!!!!!!!!!!!!!!!!!!!
      Observable.forkJoin(promises).subscribe(res =>{
        for(let i = 0; i < result.scenes.length; i++){
          let scene = result.scenes[i];
          let loopable = res as any;
          let objects = [];
          let canvasObjects = [];
          for( const obj of loopable[i].objects){
            objects.push(obj as SceneObject);
            canvasObjects.push( new SceneObject(
              obj.id, obj.sId, obj.type, obj.action,
              obj.x, obj.y, obj.w, obj.h, obj.z,
              obj.cont, obj.style, obj.event
            ));
          }
          scenesT.push( new Scene(scene.id, scene.mId, scene.background, objects) );
          canvasScenesT.push( new Scene(scene.id, scene.mId, scene.background, canvasObjects) );
        }

        let i = 0;

        for( const scene of scenesT ){
          for( const ref of scene.toPreload){

            let newLink = true;

            for( const link of linksT){
              if( link.from === scene.id && link.to === ref){
                newLink = false;
                break;
              }
            }
            if(newLink)linksT.push({"from" : scene.id, "to" : ref});
          }

          let sceneObjects = [];
          let j = 0;
          for( const obj of scene.objects){
            sceneObjects.push({"mask" : ++j, "obj" : obj});
          }

          nodesT.push({"mask" :  ++i, "id" : scene.id, "background": scene.background, "objects" : sceneObjects});

        }
        for(let i = 0; i < nodesT.length; i++){
          var node = nodesT[i];
          for(let j = 0; j < node.objects.length; j++){
            var object = node.objects[j];
            var action = object.obj.action;
            var maskAction = "none";
            if( action.split(":")[1] === "scene" && !isNaN(+action.split(":")[2])){
              for(let n of nodesT){
                  if( n.id === +action.split(":")[2]){
                    maskAction = action.split(":")[0] + ":" +
                      action.split(":")[1] + ":" + n.mask +
                      ":" + action.split(":")[3];
                  }
              }
            }
            else{
              maskAction = action;
            }
            nodesT[i].objects[j] = {
              "mask" : object.mask,
              "maskAction": maskAction,
              "obj": object.obj
            };
          }
        }

        for( const node of nodesT){
          let iso = true;
          for( const link of linksT){
            if( link.to === node.id || link.from === node.id){
              iso = false;
              break;
            }
          }
          if(iso && node.id !== this.startId) isolatedT.push(node);
        }
        this.scenes = scenesT;
        this.canvasScenes = canvasScenesT;
        this.nodes = nodesT;
        this.links = linksT;
        this.isolated = isolatedT;
        this.pos_nodes = [];

        if(!update){
          let node = this.nodes[0];
          if(node.mask === 1){
            this.select(node.id, node.mask);
          }
          else{
            for ( let n of this.nodes){
              if(n.mask === 1){
                this.select(node.id, node.mask);
              }
            }
          }
        }


        this.buildTree(this.startId);
        this.orderTree(this.startId);

        if(this.sceneId !== -1){
          for( const node of this.nodes ){
            if( node.id === this.sceneId){
              this.currentObjects = [];

              for( const obj of node.objects){
                this.currentObjects.push(obj);
              }

              for( const obj of node.objects){
                this.currentObjects.push(obj);
              }


              for( const scene of this.canvasScenes){
                if( scene.id === this.sceneId ){
                  let max = 1;

                  for( const obj of scene.objects){
                    if(max < +obj.max){
                      max = +obj.max;
                    }
                  }
                  this.maxAct = max;
                  this.currentAct = 1;
                  if(this.maxAct > 10) this.maxAct = 10;
                  break;
                }
              }

              if(!update)this.currentObject = this.currentObjects[0];
              else{
                for( let obj of this.currentObjects){
                  if(obj.mask ===  +data[1]){
                    this.currentObject = obj;
                  }
                }
              }
              if(!update)this.objectId = node.objects[0].obj.id;
              if(!update)this.maskId = node.objects[0].mask;
              break;
            }
          }

          for( let scene of this.canvasScenes){
            if( scene.id === this.sceneId){
              this.canvasScene = scene;
              break;
            }
          }
        }
        setTimeout(()=>{ this.drawLines(); }, 0);
        setTimeout(()=>{ this.setCanvas(); }, 0);
        setTimeout(()=>{ this.setCanvasDisplay(); }, 0);
      });
    });
  }
  buildTree(sid:number){
    let lvl = 0;
    this.insertNode(this.getNode(sid), lvl);
    lvl++;

    for( const link of this.links ){
      const parent = this.getNode(link.from);
      const child = this.getNode(link.to);

      if(!this.isNode(parent.id)){
        this.insertNode(parent,1);
      }
      if(!this.isNode(child.id)){
        this.insertNode(child, this.getNodeLevel(parent.id)+1);
      }
    }
  }
  orderTree(sid:number){
    let changed = true;

    for( let q = 0; q < this.nodes.length * (this.pos_nodes.length - 1) ; q++){

      changed = false;

      for( let level = 1; level < this.pos_nodes.length; level++){
        for( let node of this.pos_nodes[level]){

          let counter = [];
          let max = 0;
          let most = 0;
          for( let c = 0; c < this.pos_nodes.length; c++){
            counter.push(0);
          }

          for( let i = 0; i < this.pos_nodes.length; i++ ){
            for( let j = 0; j < this.pos_nodes[i].length; j++ ){
              for ( let link of this.links ){
                if( link.from === this.pos_nodes[i][j].id && link.to === node.id ) counter[i]++;
              }
            }
          }

          for( let m = 0; m < counter.length; m++){
            if( counter[m] > max ){
               max = counter[m];
               most = m;
             }
          }

          if( node.lvl !== most + 1 ){
            changed = true;

            let removed = false;
            let moving = node;
            moving.lvl = most + 1;

            while(moving.lvl + 1 > this.pos_nodes.length){
              this.pos_nodes.push([]);
            }



            for( let i = 0; i < this.pos_nodes.length; i++ ){
              for( let j = 0; j < this.pos_nodes[i].length; j++ ){
                if( node.id === this.pos_nodes[i][j].id){
                  this.pos_nodes[i].splice(j, 1);
                  removed = true;
                  break;
                }
              }
              if(removed) break;
            }
            this.pos_nodes[most + 1].push(moving);
            break;
          }
          for( let lvl = 0; lvl < this.pos_nodes.length; lvl++){
            if(this.pos_nodes[lvl].length === 0){
              this.pos_nodes.splice(lvl, 1);
            }
          }

        }
        if(changed) break;
      }
      if(!changed) break;
    }

  }
  insertNode(node, lvl: number){
    while(this.pos_nodes.length - 1 < lvl){
      this.pos_nodes.push([]);
    }
    this.pos_nodes[lvl].push(
      { "id" : node.id, "lvl": lvl, "mask": node.mask }
    );
  }
  isNode(id: number):boolean{

    for(let level of this.pos_nodes){
      for(let n of level){
        if(id === n.id){
          return true;
        }
      }
    }
    return false;
  }
  getNodeLevel(id: number):number{
    for(let level of this.pos_nodes){
      for(let n of level){
        if(id === n.id){
          return n.lvl;
        }
      }
    }
  }
  getNode(id:number):any{
    let newNode : any;
    for( const n of this.nodes ){
      if( n.id == id ){
        newNode = n;
      }
    }
    return newNode;
  }
  linksOfNode(node: any):any[]{
    let toReturn = [];

    for (const link of this.links){
      if(link.from === node.id) toReturn.push(link);
    }

    return toReturn;
  }
  drawLines(){
    for( const link of this.links){
      const nodeFrom = document.getElementById("node-"+link.from);
      const nodeXfrom = nodeFrom.offsetLeft;
      const nodeYfrom = nodeFrom.offsetTop;
      const nodeTo = document.getElementById("node-"+link.to);
      const nodeXto = nodeTo.offsetLeft;
      const nodeYto = nodeTo.offsetTop;
      const line = document.getElementById("line-"+link.from+"-"+link.to)

      let lpx = 0;
      let lpy = 0;
      let hor = 0;
      let ver = 0;
      let len = 0;
      let deg = 0;
      let mod = 1;

      if(nodeYfrom < nodeYto){
        ver = nodeYto - nodeYfrom;
        lpy = nodeYfrom + ver/2;
      }
      else{
        ver = nodeYfrom - nodeYto;
        lpy = nodeYto + ver/2;
        mod *= -1;
      }

      if(nodeXfrom < nodeXto){
        hor = nodeXto - nodeXfrom;
        lpx = nodeXfrom + hor/2;

      }else{
        hor = nodeXfrom - nodeXto;
        lpx = nodeXto + hor/2;
        mod *= -1;
      }

      len = Math.sqrt(ver*ver + hor*hor);

      deg = Math.asin(ver/len)*180/Math.PI * mod + 90;

      let width = 60;
      let correction = 18;

      if(this.document_width < 720){
        width = 30;
        correction = 7;
      }
      const tl = len - width;

      line.style.left = lpx + correction + "px";
      line.style.top = lpy-tl/2 + correction + "px";
      line.style.height = tl + "px";
      line.style.transform = "rotate(" + deg + "deg)";

      line.style.transformOrigin= "center center";
    }

  }

  over:number;
  hovered(id:number){
    this.over =id;
    this.onPath = [];
  }
  isOver(id: number):boolean{
    if(id === this.over) return true;
    return false;
  }
  isOverParent(id: number):boolean{
    for( const link of this.links){
      if( link.from === this.over && link.to === id) return true;
    }
    return false;
  }
  selected:number;
  selectedMask = -1;
  select(id:number, mask: number){
    this.selected = id;
    this.selectedMask = mask;
    this.sceneId=id;
    for( let scene of this.canvasScenes){
      if( scene.id === this.sceneId){
        this.canvasScene = scene;
        break;
      }
    }
    for( let node of this.nodes ){
      if( node.id === this.sceneId){
        this.currentScene= node;
        this.currentObjects = [];
        for( const obj of node.objects){
          this.currentObjects.push(obj);
        }

        this.currentObject = this.currentObjects[0];

        this.objectId = node.objects[0].obj.id;
        this.maskId = node.objects[0].mask;
        break;
      }
    }
    for( const scene of this.canvasScenes){
      if( scene.id === this.sceneId ){
        let max = 1;

        for( const obj of scene.objects){
          if(max < +obj.max){
            max = +obj.max;
          }
        }

        this.maxAct = max;
        this.currentAct = 1;
        if(this.maxAct > 10) this.maxAct = 10;
        break;
      }
    }
  }
  isSelected(id: number):boolean{
    if(id === this.selected) return true;
    return false;
  }
  isDeadend(id: number):boolean{
    for( const link of this.links){
      if( link.from === id) return false;
    }
    return true;
  }
  isUnreachable(id: number):boolean{
    if( this.startId === id ) return false;
    for( const link of this.links){
      if( link.to === id) return false;
    }
    return true;
  }
  isRoot(id: number):boolean{
    if(id === this.startId) return true;
    return false;
  }
  onPath = [];
  isOnPath( id:number):boolean{
    for( const p of this.onPath ){
      if( p === id) return true;
    }
    return false;
  }
  isLineOnPath( from:number, to:number ):boolean{
    let f = false;
    let t = false;

    for( const p of this.onPath ){
      if( p === from ){
        f = true;
        break;
      }
    }
    for( const p of this.onPath ){
      if( p === to ){
        t = true;
        break;
      }
    }
    return f && t;
  }
  showPathFromRoot(id:number){
    this.onPath.push(id);
    this.getPath(id, [0]);
  }
  getPath(id:number, checked: number[] ){
    for( let c of checked){
      if( c === id) return;
    }
    checked.push(id);
    if( id === this.startId ) return;
    for( let link of this.links){
      if( link.to === id ){
        this.onPath.push(link.from);
        this.getPath(link.from, checked);
      }
    }
  }

  createScene(){
    this.sceneService.createSceneByModuleId(this.moduleId).subscribe(res => {
      this.fillArrays(false, []);
    });
  }
  deleteScene(){
    if(this.sceneId !== this.startId){
      let deletable = true;
      for( const link of this. links){
        if(
          link.from === this.sceneId ||
          link.to === this.sceneId
        ) deletable = false;
      }

      if(deletable){
        this.sceneService.deleteSceneById(this.sceneId).subscribe(res => {
          this.fillArrays(false, []);
          this.sceneId = this.startId;
        });
      }
      this.currentObjects = [];
      for( const obj of this.nodes[0].objects){
        this.currentObjects.push(obj);
      }
      this.currentObject = this.currentObjects[0];
      this.objectId = this.nodes[0].objects[0].obj.id;
      this.maskId = this.nodes[0].objects[0].mask;
      this.selectedMask = this.maskId;
      // this.selected = this.nodes[0].id;
    }
  }

  //BLUEPRINT

  sceneProp = false;
  objectProp = false;
  toggleSceneProp(){
    this.sceneProp = !this.sceneProp;
  }
  toggleObjectProp(){
    this.objectProp = !this.objectProp;
  }


  submitScene(){
    this.sceneService.updateSceneById( this.currentScene.id, this.currentScene.background ).subscribe(res =>{

      let promises = [];

      for( const scene of this.nodes){
        if(scene.id === this.sceneId){
          for( let obj of scene.objects){
            let promise = this.sceneService.updateSceneObjectById(obj.obj);
            promises.push(promise);
          }
        }
      }

      Observable.forkJoin(promises).subscribe(res =>{
        console.log(res);
        this.fillArrays(true, [this.objectId, this.maskId]);
      });
    });
  }
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!FOCUS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  addObject(){
    for( const scene of this.nodes){
      if(scene.id === this.sceneId){

        this.sceneService.createSceneObjectBySceneId(this.sceneId).subscribe(result => {
          let newObj = {
            "mask" : this.currentObjects.length ,
            "maskAction" : "none",
            "obj" : {
              "id": result.objectId,
              "sId": this.sceneId,
              "type" : "txt",
              "action": "none",
              "x" : 860,
              "y" : 440,
              "w" : 200,
              "h" : 200,
              "z" : 10,
              "cont": "default",
              "style": "background:#AAA;color:#000;border-radius:50%;",
              "event" : "1"
            }
          };
          scene.objects.push(newObj);
          this.currentObjects.push(newObj);
        });
      }
    }
  }
  removeObject(mask: number){
    if( mask !== 1){
      this.sceneService.deleteSceneObjectById(this.objectId).subscribe(result => {
        for( let scene of this.nodes){
          if(scene.id === this.sceneId){
            for( let o = 0; o < scene.objects.length; o++){
              if( scene.objects[o].obj.id === this.objectId){
                scene.objects.splice(o,1);
              }
            }
          }
        }
        for( let o = 0; o < this.currentObjects.length; o++){
          if( this.currentObjects[o].obj.id === this.objectId){
            this.currentObjects.splice(o,1);
          }
        }
        this.objectId = this.currentObjects[0].obj.id;
        this.maskId = this.currentObjects[0].mask;
      });
    }
  }

  maskingAction(){
    this.currentObject.obj.action = this.unmaskAction(this.currentObject.maskAction);
  }
  unmaskAction(maskedAction: string):string{

    let listener = maskedAction.split(':')[0];
    let action = maskedAction.split(':')[1];

    let final = "none";

    if( listener === "click"){
      final = "click:";

      if(action === "scene"){

        final += "scene:"

        let maskedId = +maskedAction.split(':')[2];
        if(!isNaN(maskedId)){
          for( let node of this.nodes){
            if( node.mask === maskedId && this.selectedMask !== maskedId ){

              if(maskedAction.split(':')[3] === "fade"){
                final += node.id + ":fade:fade-out";
              }
              else if (maskedAction.split(':')[3] === "swipe-left"){
                final += node.id + ":swipe-left:swipe-out-left";
              }
              else if (maskedAction.split(':')[3] === "swipe-right"){
                final += node.id + ":swipe-right:swipe-out-right";
              }
              else if (maskedAction.split(':')[3] === "swipe-up"){
                final += node.id + ":swipe-up:swipe-out-up";
              }
              else if (maskedAction.split(':')[3] === "swipe-down"){
                final += node.id + ":swipe-down:swipe-out-down";
              }
              else{
                final += node.id + ":none:none";
              }
            }
          }
        }
      }
      if(action === "event"){

        final += "event:";

        let eventNum = +maskedAction.split(':')[2];
        if(!isNaN(eventNum) && eventNum > 0 && eventNum < 11){
            final += eventNum;
        }
      }

    }

    return final;
  }

  isMouseDown = false;
  mouseAction = "none";
  // startId
  objectId = 0;
  maskId = 0;
  currentObject = {
    "mask" : 0,
    "maskAction" : "none",
    "obj" : {
      "type" : "0",
      "action" : "none",
      "id" : 0,
      "x" : 0,
      "y" : 0,
      "w" : 0,
      "h" : 0,
      "z" : 0,
      "event": 0
    }
  };
  currentObjects = [];

  objects = [];

  initX: number;
  initY: number;

  initObjX: number;
  initObjY: number;
  initObjW: number;
  initObjH: number;

  canvasX : number;
  canvasY : number;
  canvasW : number;
  canvasH : number;


  stageX( x: number ): number {
    return ((x * this.canvasW) / 1920);
  }
  stageY( y: number ): number {
    return ((y * this.canvasH) / 1080);
  }
  objectX( x: number ): number {
    return ((x / this.canvasW) * 1920);
  }
  objectY( y: number ): number {
    return ((y / this.canvasH) * 1080);
  }

  currObj(){
    for( const scene of this.nodes){
      if(scene.id === this.sceneId){
        for(const node of scene.objects){
          if(node.obj.id === this.objectId){
            this.currentObject = node;
          }
        }
      }
    }
  }
  setCanvas(){
    this.canvasX = document.getElementById("blueprint").offsetLeft;
    this.canvasY = document.getElementById("blueprint").offsetTop;
    this.canvasW = document.getElementById("blueprint").offsetWidth;
    this.canvasH = document.getElementById("blueprint").offsetHeight;
  }

  onMouseButton(event: MouseEvent, type: string = "none", id: number): void {

    for (const obj of this.currentObjects){
      if(obj.obj.id === id){
        this.currentObject = obj;
        this.objectId = obj.obj.id;

        this.maskId = obj.mask;
      }
    }

    this.isMouseDown = event.buttons === 1;
    this.mouseAction = type;
    if(type !== "none"){
      this.initX = event.clientX;
      this.initY = event.clientY;
      this.initObjX = document.getElementById("obj"+this.objectId).offsetLeft;
      this.initObjY = document.getElementById("obj"+this.objectId).offsetTop;
      this.initObjW = document.getElementById("obj"+this.objectId).offsetWidth;
      this.initObjH = document.getElementById("obj"+this.objectId).offsetHeight;
    }
  }
  onMouseMove(event: MouseEvent): void {
    if(this.isMouseDown){
      if(this.mouseAction === "drag"){
        const obj = document.getElementById("obj"+this.objectId);

        const offsetX = event.clientX - this.initX;
        let newX = this.initObjX + offsetX;
        if(newX < 0) newX = 0;
        if(newX > this.canvasW - obj.offsetWidth) newX = this.canvasW - obj.offsetWidth;
        this.renderer.setStyle(obj, 'left', newX + 'px');
        this.currentObject.obj.x= Math.round( this.objectX(newX));

        const offsetY = event.clientY - this.initY;
        let newY = this.initObjY + offsetY;
        if(newY < 0) newY = 0;
        if(newY > this.canvasH - obj.offsetHeight) newY = this.canvasH - obj.offsetHeight;
        this.renderer.setStyle(obj, 'top', newY + 'px');
        this.currentObject.obj.y= Math.round(this.objectY(newY));
      }
      if(this.mouseAction === "e"){
        const obj = document.getElementById("obj"+this.objectId);

        const offsetX = event.clientX - this.initX;
        let newW = this.initObjW + offsetX;
        if(newW < 30) newW = 30;
        if(newW > this.canvasW ) newW = this.canvasW;
        this.renderer.setStyle(obj, 'width', newW + 'px');
        this.currentObject.obj.w= (Math.round(this.objectY(newW)) > 1920)?1920:Math.round(this.objectY(newW));
      }
      if(this.mouseAction === "s"){
        const obj = document.getElementById("obj"+this.objectId);

        const offsetY = event.clientY - this.initY;
        let newH = this.initObjH + offsetY;
        if(newH < 30) newH = 30;
        if(newH > this.canvasH ) newH = this.canvasH;
        this.renderer.setStyle(obj, 'height', newH + 'px');
        this.currentObject.obj.h= (Math.round(this.objectY(newH)) > 1080)?1080:Math.round(this.objectY(newH));
      }
      if(this.mouseAction === "w"){
        const obj = document.getElementById("obj"+this.objectId);

        let offsetX = event.clientX - this.initX;
        let newW = this.initObjW - offsetX;
        if(newW < 30) newW = 30;
        if(newW > this.canvasW ) newW = this.canvasW;
        this.renderer.setStyle(obj, 'width', newW + 'px');
        this.currentObject.obj.w= (Math.round(this.objectY(newW)) > 1920)?1920:Math.round(this.objectY(newW));

        offsetX = event.clientX - this.initX;
        let newX = this.initObjX + offsetX;
        if(newX < 0) newX = 0;
        if(newX - this.canvasX > this.canvasW - obj.offsetWidth) newX = this.canvasW - obj.offsetWidth + this.canvasX;
        if(newX > this.initObjX + this.initObjW - 30) newX =this.initObjX + this.initObjW - 30;
        this.renderer.setStyle(obj, 'left', newX + 'px');
        this.currentObject.obj.x= Math.round(this.objectY(newX));
      }
      if(this.mouseAction === "n"){
        const obj = document.getElementById("obj"+this.objectId);

        let offsetY = event.clientY - this.initY;
        let newH = this.initObjH - offsetY;
        if(newH < 30) newH = 30;
        if(newH > this.canvasH ) newH = this.canvasH;
        this.renderer.setStyle(obj, 'height', newH + 'px');
        this.currentObject.obj.h= (Math.round(this.objectY(newH)) > 1080)?1080:Math.round(this.objectY(newH));

        offsetY = event.clientY - this.initY;
        let newY = this.initObjY + offsetY;
        if(newY < 0) newY = 0;
        if(newY > this.canvasH - obj.offsetHeight) newY = this.canvasH - obj.offsetHeight;
        if(newY > this.initObjY + this.initObjH - 30) newY =this.initObjY + this.initObjH - 30;
        this.renderer.setStyle(obj, 'top', newY + 'px');
        this.currentObject.obj.y= Math.round(this.objectY(newY));
      }
      if(this.mouseAction === "nw"){
        const obj = document.getElementById("obj"+this.objectId);

        let offsetY = event.clientY - this.initY;
        let newH = this.initObjH - offsetY;
        if(newH < 30) newH = 30;
        if(newH > this.canvasH ) newH = this.canvasH;
        this.renderer.setStyle(obj, 'height', newH + 'px');
        this.currentObject.obj.h= (Math.round(this.objectY(newH)) > 1080)?1080:Math.round(this.objectY(newH));

        offsetY = event.clientY - this.initY;
        let newY = this.initObjY + offsetY;
        if(newY < 0) newY = 0;
        if(newY > this.canvasH - obj.offsetHeight) newY = this.canvasH - obj.offsetHeight;
        if(newY > this.initObjY + this.initObjH - 30) newY =this.initObjY + this.initObjH - 30;
        this.renderer.setStyle(obj, 'top', newY + 'px');
        this.currentObject.obj.y= Math.round(this.objectY(newY));

        let offsetX = event.clientX - this.initX;
        let newW = this.initObjW - offsetX;
        if(newW < 30) newW = 30;
        if(newW > this.canvasW ) newW = this.canvasW;
        this.renderer.setStyle(obj, 'width', newW + 'px');
        this.currentObject.obj.w= (Math.round(this.objectY(newW)) > 1920)?1920:Math.round(this.objectY(newW));

        offsetX = event.clientX - this.initX;
        let newX = this.initObjX + offsetX;
        if(newX < 0) newX = 0;
        if(newX - this.canvasX > this.canvasW - obj.offsetWidth) newX = this.canvasW - obj.offsetWidth + this.canvasX;
        if(newX > this.initObjX + this.initObjW - 30) newX =this.initObjX + this.initObjW - 30;
        this.renderer.setStyle(obj, 'left', newX + 'px');
        this.currentObject.obj.x= Math.round(this.objectY(newX));

      }

      if(this.mouseAction === "ne"){
        const obj = document.getElementById("obj"+this.objectId);

        let offsetY = event.clientY - this.initY;
        let newH = this.initObjH - offsetY;
        if(newH < 30) newH = 30;
        if(newH > this.canvasH ) newH = this.canvasH;
        this.renderer.setStyle(obj, 'height', newH + 'px');
        this.currentObject.obj.h= (Math.round(this.objectY(newH)) > 1080)?1080:Math.round(this.objectY(newH));

        offsetY = event.clientY - this.initY;
        let newY = this.initObjY + offsetY;
        if(newY < 0) newY = 0;
        if(newY > this.canvasH - obj.offsetHeight) newY = this.canvasH - obj.offsetHeight;
        if(newY > this.initObjY + this.initObjH - 30) newY =this.initObjY + this.initObjH - 30;
        this.renderer.setStyle(obj, 'top', newY + 'px');
        this.currentObject.obj.y= Math.round(this.objectY(newY));

        let offsetX = event.clientX - this.initX;
        let newW = this.initObjW + offsetX;
        if(newW < 30) newW = 30;
        if(newW > this.canvasW ) newW = this.canvasW;
        this.renderer.setStyle(obj, 'width', newW + 'px');
        this.currentObject.obj.w= (Math.round(this.objectY(newW)) > 1920)?1920:Math.round(this.objectY(newW));
      }
      if(this.mouseAction === "sw"){
        const obj = document.getElementById("obj"+this.objectId);

        const offsetY = event.clientY - this.initY;
        let newH = this.initObjH + offsetY;
        if(newH < 30) newH = 30;
        if(newH > this.canvasH ) newH = this.canvasH;
        this.renderer.setStyle(obj, 'height', newH + 'px');
        this.currentObject.obj.h= (Math.round(this.objectY(newH)) > 1080)?1080:Math.round(this.objectY(newH));

        let offsetX = event.clientX - this.initX;
        let newW = this.initObjW - offsetX;
        if(newW < 30) newW = 30;
        if(newW > this.canvasW ) newW = this.canvasW;
        this.renderer.setStyle(obj, 'width', newW + 'px');
        this.currentObject.obj.w= (Math.round(this.objectY(newW)) > 1920)?1920:Math.round(this.objectY(newW));

        offsetX = event.clientX - this.initX;
        let newX = this.initObjX + offsetX;
        if(newX < 0) newX = 0;
        if(newX - this.canvasX > this.canvasW - obj.offsetWidth) newX = this.canvasW - obj.offsetWidth + this.canvasX;
        if(newX > this.initObjX + this.initObjW - 30) newX =this.initObjX + this.initObjW - 30;
        this.renderer.setStyle(obj, 'left', newX + 'px');
        this.currentObject.obj.x= Math.round(this.objectY(newX));
      }

      if(this.mouseAction === "se"){
        const obj = document.getElementById("obj"+this.objectId);

        const offsetY = event.clientY - this.initY;
        let newH = this.initObjH + offsetY;
        if(newH < 30) newH = 30;
        if(newH > this.canvasH ) newH = this.canvasH;
        this.renderer.setStyle(obj, 'height', newH + 'px');
        this.currentObject.obj.h= (Math.round(this.objectY(newH)) > 1080)?1080:Math.round(this.objectY(newH));

        const offsetX = event.clientX - this.initX;
        let newW = this.initObjW + offsetX;
        if(newW < 30) newW = 30;
        if(newW > this.canvasW ) newW = this.canvasW;
        this.renderer.setStyle(obj, 'width', newW + 'px');
        this.currentObject.obj.w= (Math.round(this.objectY(newW)) > 1920)?1920:Math.round(this.objectY(newW));
      }

    }
  }
  //CANVAS


  canvasDisplayX : number;
  canvasDisplayY : number;
  canvasDisplayW : number;
  canvasDisplayH : number;
  setCanvasDisplay(){
      this.canvasDisplayX = document.getElementById("stage").offsetLeft;
      this.canvasDisplayY = document.getElementById("stage").offsetTop;
      this.canvasDisplayW = document.getElementById("stage").offsetWidth;
      this.canvasDisplayH = document.getElementById("stage").offsetHeight;
    }

  canvasScene = new Scene(0,0,"#000",[]);

  currentAct: number = 1;
  previousAct: number = 0;
  maxAct: number = 1;
  nextAct(){
    this.initialEvent = false;
    this.previousAct = this.currentAct;
    this.currentAct++;
    if(this.currentAct > this.maxAct) this.currentAct = 1;
  }
  prevAct(){
    this.initialEvent = false;
    this.previousAct = this.currentAct;
    this.currentAct--;
    if(this.currentAct < 1) this.currentAct = this.maxAct;
  }

  handleSceneClicks(input: string){
    const action = input.split(':');
    if( action[0] === "click"){
      if( action[1] === 'scene' ){
        if( this.currentAnim === action[4] ) this.currentAnim = action[4] +"C";
        else this.currentAnim = action[4];
        this.currentAct = 1;
        this.initialEvent = true;
      }
      if(action[1] === 'event'){
        if(this.currentAct !== +action[2]){
          this.initialEvent = false;

          this.previousAct = this.currentAct;
          this.currentAct = +action[2];
        }
      }
    }
  }

  getCurrentAct():string{
    if(this.initialEvent) {
      // console.log("pas");
      return "pas" + this.currentAct;
    }
    else{
      // console.log("act");
      return "act" + this.currentAct;
    }
  }
  activeEvent(events: number[]){
    let init: string = "0";
    let curr = false;
    let prev = false;
    for(let e of events){
      if( e === this.currentAct) {
        curr = true;
      }
      if( e === this.previousAct) {
        prev = true;
      }
    }
    if(curr && prev){
      init = "stay";
    }
    else if(curr){
      init = "" + this.currentAct;
    }
    else{
      if(this.currentAct < 5) init = "" + (this.currentAct + 1);
      else                    init = "" + (this.currentAct - 1);
    }
    return "event"+init;
  }

  initialEvent = true;

  currentAnim = "fade";

  stageWidth: number;
  stageHeight: number;
  getDimensions(){
    if(this.document_width >= 1200){
      this.stageWidth = 912;
      this.stageHeight = 512;
    }
    else if(this.document_width >= 1000){
      this.stageWidth = 736;
      this.stageHeight = 416;
    }
    else if(this.document_width >= 720){
      this.stageWidth = 512;
      this.stageHeight = 288;
    }
    else{
      this.stageWidth = this.document_width * 80 / 100;
      this.stageHeight = this.document_height * 80 / 100;
    }
  }

  // min-height
  document_height = document.documentElement.clientHeight;
  document_width = document.documentElement.clientHeight;

  LOG(log:any){
    console.log(log);
  }

// min height
  container_min_height = 0;

  resize(){
    this.document_height = document.documentElement.clientHeight;
    this.document_width = document.documentElement.clientWidth;
    this.container_min_height = this.document_height - 120;
  }
  @HostListener('window:resize', ['$event']) onResize(event){
    this.resize();
    if(this.moduleService.selectedModule !== 0)this.drawLines();
    if(this.moduleService.selectedModule !== 0)this.setCanvas();
    if(this.moduleService.selectedModule !== 0)this.setCanvasDisplay();
    if(this.moduleService.selectedModule !== 0)this.getDimensions();
  }
}
