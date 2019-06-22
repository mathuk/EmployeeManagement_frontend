import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import {host} from './../../models/conf';


@Injectable({
  providedIn: 'root'
})
export class AddRoleService {

  url = 'http://' + host + ':8080/admin/new-position';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization':'626fbc3a-536e-4c4b-aec7-38299aa0957a'
    })
  };

  addRole(f: NgForm) {
    console.log(f.value);
    this.http.post(this.url, JSON.stringify(f.value), this.httpOptions)
    .subscribe(response => {

      if (JSON.parse(JSON.stringify(response)).statusCode === 'S1000') {
        alert('New position added successfully!');
        f.reset();
      } else {
        alert('An unexpected error occurred');
      }

    }, error => {
      alert('An unexpected error occurred');

    });

  }


}
