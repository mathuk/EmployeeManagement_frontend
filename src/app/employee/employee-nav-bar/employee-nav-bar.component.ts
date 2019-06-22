import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-nav-bar',
  templateUrl: './employee-nav-bar.component.html',
  styleUrls: ['./employee-nav-bar.component.css']
})
export class EmployeeNavBarComponent implements OnInit {

  constructor(private router: Router) { }
  name = localStorage.getItem('name');

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
