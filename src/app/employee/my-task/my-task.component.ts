import { Component, OnInit } from '@angular/core';
import { MyTaskService } from './my-task.service';

@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.css']
})
export class MyTaskComponent implements OnInit {

  constructor(private service:MyTaskService) { }
  tasks:any[];

  ngOnInit() {
    this.service.getTasks().subscribe(res=>{

      if(JSON.parse(JSON.stringify(res)).statusCode==="S1000"){
        this.tasks=JSON.parse(JSON.stringify(res))['content'];
        console.log(this.tasks);
      }
      else{
        // alert(JSON.parse(JSON.stringify(response)).statusDescription);
        if(JSON.parse(JSON.stringify(res)).statusCode==="E1003"){
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
