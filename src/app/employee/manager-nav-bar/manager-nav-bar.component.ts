import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manager-nav-bar',
  templateUrl: './manager-nav-bar.component.html',
  styleUrls: ['./manager-nav-bar.component.css']
})
export class ManagerNavBarComponent implements OnInit {

  name = localStorage.getItem('name');

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('login');
    localStorage.removeItem('role');
    localStorage.removeItem('name');
    localStorage.removeItem('id');
    localStorage.removeItem('number');

    this.router.navigate(['']);

  }

}
