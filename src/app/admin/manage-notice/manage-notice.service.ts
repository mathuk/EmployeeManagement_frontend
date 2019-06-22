import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {host} from './../../models/conf';


@Injectable({
  providedIn: 'root'
})
export class ManageNoticeService {

  url = 'http://' + host + ':8080/admin/notices';
  url2 = 'http://' + host + ':8080/admin/delete-notice';

  constructor(private http: HttpClient) { }

  getNotice(): Observable<Object> {

    return this.http.get(this.url);

  }

  deleteNotice(id: string) {
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
