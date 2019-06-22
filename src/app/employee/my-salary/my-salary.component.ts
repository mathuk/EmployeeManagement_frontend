import { Component, OnInit } from '@angular/core';
import { MySalaryService } from './my-salary.service';

@Component({
  selector: 'app-my-salary',
  templateUrl: './my-salary.component.html',
  styleUrls: ['./my-salary.component.css']
})
export class MySalaryComponent implements OnInit {

  constructor(private service:MySalaryService) { }
  salaries:any[];
  
  ngOnInit() {

    this.service.getSalary()
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
    }
);
    
  }

}
