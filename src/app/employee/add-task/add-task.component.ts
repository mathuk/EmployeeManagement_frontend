import { AddTaskService } from './add-task.service';
import { Component, OnInit } from '@angular/core';
import { ManageEmployeeService } from 'src/app/admin/manage-employee/manage-employee.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  employees: any[];
  constructor(private service: ManageEmployeeService, private taskService: AddTaskService, private spinner: NgxSpinnerService) { }

  ngOnInit() {

    this.service.getEmployees()
    .subscribe(response => {

      this.spinner.hide();
      if (JSON.parse(JSON.stringify(response)).statusCode === 'S1000') {
        this.employees = JSON.parse(JSON.stringify(response))['content'];
        console.log(this.employees);
        return this.employees;
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


  submit(f: NgForm) {

    console.log(f.value);

    const task = {
          'employee': f.value.employee,
          'deadLine': f.value.deadLine,
          'description': f.value.description,
          'createdBy': {'eId': localStorage.getItem('number')}
    };

    console.log(task);
    this.taskService.addTask(task);
    f.reset();

  }

}
