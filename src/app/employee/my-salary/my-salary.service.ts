import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {host} from '../../models/conf';


@Injectable({
  providedIn: 'root'
})
export class MySalaryService {

  url = 'http://' + host + ':8080/my-salary';
  // url2="http://localhost:8080/admin/delete-notice";

  constructor(private http: HttpClient) { }

  getSalary(): Observable<Object> {

    return this.http.get(this.url, {
      params: {
        id: localStorage.getItem('number')
      }});

  }

  // deleteNotice(id:string){
  //   this.http.delete(this.url2,{
  //     params: {
  //       id: id
  //     }}).subscribe(response=>{
  //       if(JSON.parse(JSON.stringify(response)).statusCode==="S1000"){
  //         alert("Item is deleted");
  //     }
  //     else{
  //         alert("An unexpected error occurred");
  //     }
  //   },error=>{
  //       alert("An unexpected error occurred");
  //   });
  // }
}
