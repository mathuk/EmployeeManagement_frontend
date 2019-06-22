import { LeaveRequestService } from './leave-request.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent implements OnInit {

  

  constructor(private service:LeaveRequestService) { }

  requests:any[];
  
  ngOnInit() {

    this.service.getRequests()
    .subscribe(response=>{
      if(JSON.parse(JSON.stringify(response)).statusCode==="S1000"){
        this.requests=JSON.parse(JSON.stringify(response))['content'];
        console.log(this.requests);
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

  onsubmit(f:NgForm){
    console.log(f.value);
    this.service.addLeaveRequest(f);  
  }

}
