import { Injectable } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NgxSpinnerService} from 'ngx-spinner';
import {Observable} from 'rxjs';
import {host} from './../../models/conf';


@Injectable({
  providedIn: 'root'
})
export class AddAttendanceService {

  url = 'http://' + host + ':8080/arrival';
  url2 = 'http://' + host + ':8080/attendances';
  url3 = 'http://' + host + ':8080/departure';


  constructor(private http: HttpClient, private spinner: NgxSpinnerService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      // 'Authorization':'626fbc3a-536e-4c4b-aec7-38299aa0957a'
    })
  };

  addAttendance(f: NgForm) {
    console.log(f.value);
    this.http.post(this.url, JSON.stringify(f.value), this.httpOptions)
      .subscribe(response => {

        console.log(response);
        if (JSON.parse(JSON.stringify(response)).statusCode === 'S1000') {
          alert('Attebdance added successfully!');
          f.reset();
        } else {
          alert('An unexpected error occurred');
        }
        console.log(response);
      }, error => {
        alert('An unexpected error occurred');

      });

  }

  checkout(attendance) {

    this.http.post(this.url3, attendance, this.httpOptions)
      .subscribe(response => {

        console.log(response);
        if (JSON.parse(JSON.stringify(response)).statusCode === 'S1000') {
          alert('Attendance added successfully!');

        } else {
          alert('An unexpected error occurred');
        }
        console.log(response);
      }, error => {
        alert('An unexpected error occurred');

      });

  }

  getAttendances(): Observable<Object> {

    // this.spinner.show();
    return this.http.get(this.url2);

  }
}
