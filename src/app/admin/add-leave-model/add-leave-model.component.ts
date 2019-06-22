import { AddLeaveModelService } from './add-leave-model.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-leave-model',
  templateUrl: './add-leave-model.component.html',
  styleUrls: ['./add-leave-model.component.css']
})
export class AddLeaveModelComponent implements OnInit {

  constructor(private service:AddLeaveModelService) { }

  ngOnInit() {
  }

  submit(f:NgForm) {
    console.log(f.value);

    if (f.valid) {
      this.service.addLeaveModel(f);
    }
  }

}
