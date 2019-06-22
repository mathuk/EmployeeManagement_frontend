import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import {host} from './../../models/conf';


@Injectable({
  providedIn: 'root'
})
export class AddNoticeService {

  url = 'http://' + host + ':8080/admin/new-notice';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'applicationa/json',
      // 'Authorization':'626fbc3a-536e-4c4b-aec7-38299aa0957a'
    })
  };

  addNotice(f: NgForm) {
    console.log(f.value);
    this.http.post(this.url, JSON.stringify(f.value), this.httpOptions)
    .subscribe(response => {

      if (JSON.parse(JSON.stringify(response)).statusCode === 'S1000') {
        alert('New notice added successfully!');
        f.reset();
      } else {
        alert(JSON.parse(JSON.stringify(response)).statusDescription);
      }
      console.log(response);

    }, error => {
      alert('An unexpected error occurred');

    });

  }
}
