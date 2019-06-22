import { Component, OnInit } from '@angular/core';
import { MyAttendanceService } from './my-attendance.service';

@Component({
  selector: 'app-my-attendance',
  templateUrl: './my-attendance.component.html',
  styleUrls: ['./my-attendance.component.css']
})
export class MyAttendanceComponent implements OnInit {

  constructor(private service: MyAttendanceService) { }

  attendances: any[];

  ngOnInit() {

    this.service.getSalary()
    .subscribe(response => {
      if (JSON.parse(JSON.stringify(response)).statusCode === 'S1000') {
        this.attendances = JSON.parse(JSON.stringify(response))['content'];
        console.log(this.attendances);
      } else {
        // alert(JSON.parse(JSON.stringify(response)).statusDescription);
        if (JSON.parse(JSON.stringify(response)).statusCode === 'E1003') {
          alert('No results Found');
        } else {
          alert('An unexpected error occurred');
        }
      }
    }, error => {
        alert('An unexpected error occurred');
    }
);

  }
}
