import { Component, OnInit } from '@angular/core';
import { ManageRoleService } from './manage-role.service';

@Component({
  selector: 'app-manage-role',
  templateUrl: './manage-role.component.html',
  styleUrls: ['./manage-role.component.css']
})
export class ManageRoleComponent implements OnInit {

  positions:any[];
  constructor(private service:ManageRoleService) { }

  ngOnInit() {
      this.service.getRole()
        .subscribe(response=>{

          if(JSON.parse(JSON.stringify(response)).statusCode==="S1000"){
          // alert("Payroll model added successfully!");
          this.positions=JSON.parse(JSON.stringify(response))['content'];
        
        }
        else{
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
      this.service.deletePosition(id);
   }
  }
}
