import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ManageEmployeeService} from '../../admin/manage-employee/manage-employee.service';
import {AddAttendanceService} from './add-attendance.service';

@Component({
  selector: 'app-add-attendance',
  templateUrl: './add-attendance.component.html',
  styleUrls: ['./add-attendance.component.css']
})
export class AddAttendanceComponent implements OnInit {

  employees: any[];
  attendances: any[];

  constructor(private manageEmployeeService: ManageEmployeeService, private service: AddAttendanceService) { }

  ngOnInit() {

    this.service.getAttendances()
      .subscribe(response => {

        // this.spinner.hide();
        if (JSON.parse(JSON.stringify(response)).statusCode === 'S1000') {

          //value assignment
          this.attendances = JSON.parse(JSON.stringify(response))['content'];


          console.log(this.attendances);

        } else {
          // alert(JSON.parse(JSON.stringify(response)).statusDescription);
          console.log(JSON.parse(JSON.stringify(response))['statusDescription']);

          if (JSON.parse(JSON.stringify(response)).statusCode === 'E1003') {
            alert('No results Found');
          } else {
            alert('An unexpected error occurred');
          }
        }
      }, error => {
        alert('An unexpected error occurred');
      });




    this.manageEmployeeService.getEmployees()
      .subscribe(response => {

        // this.spinner.hide();
        if (JSON.parse(JSON.stringify(response)).statusCode === 'S1000') {
          this.employees = JSON.parse(JSON.stringify(response))['content'];
          console.log(this.employees);

        } else {
          // alert(JSON.parse(JSON.stringify(response)).statusDescription);
          console.log(JSON.parse(JSON.stringify(response))['statusDescription']);

          if (JSON.parse(JSON.stringify(response)).statusCode === 'E1003') {
            alert('No results Found');
          } else {
            alert('An unexpected error occurred');
          }
        }
      }, error => {
        alert('An unexpected error occurred');
      });



  }



  times(time) {
    console.log(time);
  }

  onsubmit(f: NgForm) {
    console.log(f.value);
    this.service.addAttendance(f);

  }

  checkout(attendance) {
    console.log(attendance);

    this.service.checkout(attendance);
  }

}
