import { AddRoleService } from './add-role.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  constructor(private service:AddRoleService) { }

  ngOnInit() {
  }

  onsubmitRole(f:NgForm){
    console.log("hasjk");
    console.log(f.value);

    if(f.valid){
      this.service.addRole(f);
    }
  }

}
