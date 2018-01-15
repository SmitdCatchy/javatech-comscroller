import { Component, OnInit, HostListener } from '@angular/core';
import {User} from "../../models/User";
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(public userService: UserService, private router: Router) {  }

// min-height
  document_height = document.documentElement.clientHeight;
  container_min_height = 0;

  resize(){
    this.document_height = document.documentElement.clientHeight;
    this.container_min_height = this.document_height - 120;
  }
  ngOnInit() {
    this.resize();
    if(this.userService.user.role === "GUEST") this.router.navigate(['/']);
  }
  @HostListener('window:resize', ['$event'])onResize(event){
    this.resize();
  }

}
