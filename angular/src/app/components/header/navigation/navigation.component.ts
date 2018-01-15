import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user.service";
import { NavigationEnd, Router } from "@angular/router";
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit() {}

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
