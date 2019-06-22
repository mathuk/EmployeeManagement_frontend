import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {host} from './../../models/conf';


@Injectable({
  providedIn: 'root'
})
export class MyTaskService {


  url = 'http://' + host + ':8080/my-task';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Object> {

    return this.http.get(this.url, {
      params: {
        id: localStorage.getItem('id')
      }});
  }
}
