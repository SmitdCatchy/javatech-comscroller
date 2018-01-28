import { Component, OnInit, HostListener } from '@angular/core';

import { ModuleService } from '../../services/module.service';
import { UserService } from "../../services/user.service";
import { EditorService } from "../../services/editor.service";
import { Module } from '../../models/Module';

import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {

  modules: Module[] = [];

  listed: Module[];

  constructor(
    private moduleService: ModuleService,
    public userService: UserService,
    public editorService: EditorService,
    private route: ActivatedRoute,
    private router : Router
  ){}

  hammer = String.fromCodePoint(0x02692);

  ngOnInit() {
    this.loadModuls();
    this.resize();
  }

  loadModuls(){
    this.moduleService.getModules().subscribe(results => {
      let temp = results.modules;
      let newModules = [];
      for(let t of temp){
        newModules.push(new Module(
          t.id, t.owner, t.name, t.type, t.description, t.image,
          t.startscene, t.isPublic, t.finished, t.approved,
          t.approvedBy, t.published, t.views, t.rate
        ));
      }
      this.modules = newModules;
    });
  }

  iconAdd(){
    this.moduleService.selectedModule = 0;
    this.router.navigate(['editor/new']);
  }
  iconPlay(id: number,type: string, name: string){
    this.moduleService.selectedModule = id;
    if(type === "Adventure"){
      this.router.navigate(['play/'+name]);
    }
    else{
      this.router.navigate(['read/'+name]);
    }
  }
  iconEdit(id: number, name: string){
    this.moduleService.selectedModule = id;
    this.router.navigate(['editor/'+name]);
  }
  iconApprove(id:number){
    this.moduleService.approveModule(id).subscribe(results => {
      this.ngOnInit();
    });
  }
  iconDisapprove(id:number){
    this.moduleService.disapproveModule(id).subscribe(results => {
      this.ngOnInit();
    });
  }
  routerLink="/editor/new"

// min-height
  document_height = document.documentElement.clientHeight;
  container_min_height = 0;

  resize(){
    this.document_height = document.documentElement.clientHeight;
    this.container_min_height = this.document_height - 120;
  }
  @HostListener('window:resize', ['$event'])onResize(event){
    this.resize();
  }
}
