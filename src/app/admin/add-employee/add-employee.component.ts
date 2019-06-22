import { AddEmployeeService } from './add-employee.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ManageLeaveService } from '../manage-leave/manage-leave.service';
import { ManagePayrollService } from '../manage-payroll/manage-payroll.service';
import { ManageRoleService } from '../manage-role/manage-role.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  positions:any[];
  salaries:any[];
  leaves:any[];

  constructor(private leaveService:ManageLeaveService,
              private salryService:ManagePayrollService,
              private roleService:ManageRoleService,
              private service:AddEmployeeService) { }

  ngOnInit() {
    this.roleService.getRole()
    .subscribe(response=>{

      if(JSON.parse(JSON.stringify(response)).statusCode==="S1000"){
      this.positions=JSON.parse(JSON.stringify(response))['content'];
    }
    else{}
    },error=>{});

    this.salryService.getSalaryModels()
    .subscribe(response=>{
      if(JSON.parse(JSON.stringify(response)).statusCode==="S1000"){
        this.salaries=JSON.parse(JSON.stringify(response))['content']; 
      }
      else{}
    },error=>{});


    this.leaveService.getLeaves()
    .subscribe(response=>{
      if(JSON.parse(JSON.stringify(response)).statusCode==="S1000"){
        this.leaves=JSON.parse(JSON.stringify(response))['content'];
      }
      else{}
    },error=>{});
  }


  onsubmit(f:NgForm){
    console.log(f.value);
    this.service.addEmployee(f);
    
  }

}
