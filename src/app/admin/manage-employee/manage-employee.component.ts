// import { MdDialogRef,MdDialog } from '@angular/material';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ManageEmployeeService } from './manage-employee.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css']
})
export class ManageEmployeeComponent implements OnInit{

  // dialogRef: MdDialogRef<ConfirmationDialogComponent>;
  employees:any[];
  constructor(private service:ManageEmployeeService,private spinner: NgxSpinnerService) { }

  ngOnInit() {

    this.service.getEmployees()
    .subscribe(response=>{

      this.spinner.hide();
      if(JSON.parse(JSON.stringify(response)).statusCode==="S1000"){
        this.employees=JSON.parse(JSON.stringify(response))['content'];
        console.log(this.employees);
        return this.employees;
      }
      else{
        // alert(JSON.parse(JSON.stringify(response)).statusDescription);
        console.log(JSON.parse(JSON.stringify(response))['statusDescription']);

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

  // delete(){

  //   console.log("Hello");

  //   this.confirmationDialogService.confirm("Hello","Hello")
  //   .then((confirmed) => console.log('User confirmed:', confirmed))
  //   .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

    
  // }
  delete(id:string){
    console.log(id);
    if(window.confirm('Are sure you want to delete this item ?')){
          console.log(id);

      this.service.delete(id);
      // this.ngOnInit();
   }
  }

 

}
