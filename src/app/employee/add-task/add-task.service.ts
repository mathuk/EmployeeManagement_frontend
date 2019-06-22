import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {host} from './../../models/conf';


@Injectable({
  providedIn: 'root'
})
export class AddTaskService {

  url = 'http://' + host + ':8080/manager/add-task';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization':'626fbc3a-536e-4c4b-aec7-38299aa0957a'
    })
  };


  addTask(task) {
    this.http.post(this.url, JSON.stringify(task), this.httpOptions)
    .subscribe(response => {

      console.log(response);
      if (JSON.parse(JSON.stringify(response)).statusCode === 'S1000') {
        alert('Task added successfully!');
      } else {
        alert(JSON.parse(JSON.stringify(response)).statusDescription);
      }
      console.log(response);
    }, error => {
      alert('An unexpected error occurred');

    });

  }
}
