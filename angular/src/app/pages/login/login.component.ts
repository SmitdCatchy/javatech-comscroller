import { Component, OnInit, HostListener } from '@angular/core';
import {User} from "../../models/User";
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  err = "";

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private userService: UserService, private router: Router) {  }

// min-height
  document_height = document.documentElement.clientHeight;
  container_min_height = 0;

  resize(){
    this.document_height = document.documentElement.clientHeight;
    this.container_min_height = this.document_height - 120;
  }
  ngOnInit() {
    this.resize();
    if(this.userService.user.role !== "GUEST") this.router.navigate(['/']);
  }
  @HostListener('window:resize', ['$event'])onResize(event){
    this.resize();
  }

  submit() {
    this.err = this.userService.login(this.username.value,this.password.value);
    if(this.err === "") this.router.navigate(['/']);
  }

  get username(): AbstractControl {
    return this.loginForm.get('username');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }


}
