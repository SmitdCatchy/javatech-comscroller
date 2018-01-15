import { Component, OnInit, HostListener } from '@angular/core';
import { User } from "../../models/User";
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  err = "";

  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirm: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    nickname: new FormControl('', [Validators.required])
  });

  check= new FormControl(false);

  constructor(private userService: UserService, private router: Router) {}

// min-height
  document_height = document.documentElement.clientHeight;
  container_min_height = 0;

  confirmed():boolean {
    return this.username.value === this.confirm.value;
  }

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
    this.err = this.userService.register(this.username.value, this.nickname.value, this.email.value, this.password.value);
    if(this.err === ''){
      this.err = this.userService.login(this.username.value, this.password.value);
      this.router.navigate(['/']);
    }
  }

  get username(): AbstractControl {
    return this.registerForm.get('username');
  }

  get password(): AbstractControl {
    return this.registerForm.get('password');
  }

  get confirm(): AbstractControl {
    return this.registerForm.get('confirm');
  }


  get email(): AbstractControl {
    return this.registerForm.get('email');
  }

  get nickname(): AbstractControl {
    return this.registerForm.get('nickname');
  }

  changeValue(){
    this.check = new FormControl(!this.check.value);
  }



}
