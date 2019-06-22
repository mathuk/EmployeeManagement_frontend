import { Component, OnInit } from '@angular/core';
import { ManageLeaveService } from './manage-leave.service';

@Component({
  selector: 'app-manage-leave',
  templateUrl: './manage-leave.component.html',
  styleUrls: ['./manage-leave.component.css']
})
export class ManageLeaveComponent implements OnInit {

  leaves:any[];
  constructor(private service:ManageLeaveService) { }

  ngOnInit() {

    this.service.getLeaves()
    .subscribe(response=>{
      if(JSON.parse(JSON.stringify(response)).statusCode==="S1000"){
        this.leaves=JSON.parse(JSON.stringify(response))['content'];
        console.log(this.leaves);
        
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
      this.service.delete(id);
   }
  }
  
}
