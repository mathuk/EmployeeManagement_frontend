import { Component, OnInit } from '@angular/core';
import { ManagePayrollService } from './manage-payroll.service';

@Component({
  selector: 'app-manage-payroll',
  templateUrl: './manage-payroll.component.html',
  styleUrls: ['./manage-payroll.component.css']
})
export class ManagePayrollComponent implements OnInit {

  salaries:any[];
  constructor(private service:ManagePayrollService) { }

  ngOnInit() {

    this.service.getSalaryModels()
    .subscribe(response=>{
      if(JSON.parse(JSON.stringify(response)).statusCode==="S1000"){
        this.salaries=JSON.parse(JSON.stringify(response))['content'];
        console.log(this.salaries);
      }
      else{
        // alert(JSON.parse(JSON.stringify(response)).statusDescription);
        if(JSON.parse(JSON.stringify(response)).statusCode==="E1003"){
          alert("No results Found");
        }
        else{
          alert("An unexpected error occurred");
        }
      }
    },error=>{
        alert("An unexpected error occurred");
    });
  }

  delete(id:string){
    if(window.confirm('Are sure you want to delete this item ?')){
      this.service.deleteSalary(id);
   }
  }
  

}
