import { element } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { url } from 'inspector';
import {host} from './../../models/conf';


@Injectable({
  providedIn: 'root'
})
export class ManageEmployeeService {

  url = 'http://' + host + ':8080/admin/employees';
  url2 = 'http://l' + host + ':8080/admin/delete-employees';

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) { }

  getEmployees(): Observable<Object> {

    // this.spinner.show();
    this.http.get(this.url).subscribe(res => {console.log(res); });
    return this.http.get(this.url);

  }

  delete(id: string) {
    this.http.delete(this.url2, {
      params: {
        id: id
      }}).subscribe(response => {
        if (JSON.parse(JSON.stringify(response)).statusCode === 'S1000') {
          alert('Item is deleted');
      } else {
          alert('An unexpected error occurred');
      }
    }, error => {
        alert('An unexpected error occurred');
    });
  }

}
