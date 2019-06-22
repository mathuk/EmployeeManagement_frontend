import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {host} from './../../models/conf';


@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  url = 'http://' + host + ':8080/manager/requests';
  url2 = 'http://' + host + ':8080/manager/my-reply';
  url3 = 'http://' + host + ':8080/manager/add-reply';

  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization':'626fbc3a-536e-4c4b-aec7-38299aa0957a'
    })
  };

  getReplies(): Observable<Object> {

    console.log(host);
    return this.http.get(this.url2, {
      params: {
        id: localStorage.getItem('id')
      }});

  }

  getAllRequests(): Observable<Object> {

    return this.http.get(this.url);

  }



  addReply(reply ) {

    this.http.put(this.url3, reply, this.httpOptions)
      .subscribe(response => {

        console.log(response);
        if (JSON.parse(JSON.stringify(response)).statusCode === 'S1000') {
          alert('Reply added successfully!');
        } else {
          alert(JSON.parse(JSON.stringify(response)).statusDescription);
        }
        console.log(response);
      }, error => {
        alert('An unexpected error occurred');

      });

  }
}
