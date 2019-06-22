import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {host} from './../../models/conf';


@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  url = 'http://' + host + ':8080/change-password';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      // 'Authorization':'626fbc3a-536e-4c4b-aec7-38299aa0957a'
    })
  };


  changePassword(f: NgForm) {

    const input = new FormData();

    input.append('user', localStorage.getItem('id'));
    input.append('cur', f.value.current);
    input.append('password', f.value.new);


    console.log(input);

    this.http.post(this.url, input)
      .subscribe(response => {

        console.log(response);
        if (JSON.parse(JSON.stringify(response)).statusCode === 'S1000') {
          alert('Password changed successfully!');
          f.reset();
        } else {
          alert('An unexpected error occurred');
        }
        console.log(response);
      }, error => {
        alert('An unexpected error occurred');

      });

  }



}
