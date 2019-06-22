import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {host} from './../../models/conf';


@Injectable({
  providedIn: 'root'
})
export class ManageRoleService {

  url = 'http://' + host + ':8080/admin/positions';
  url2 = 'http://' + host + ':8080/admin/delete-position';
  roles: [any];

  constructor(private http: HttpClient) { }

  getRole(): Observable<Object> {
    return this.http.get(this.url);
  }

  deletePosition(id: string) {
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


