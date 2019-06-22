import { AddPayrollModelService } from './add-payroll-model.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-payroll',
  templateUrl: './add-payroll.component.html',
  styleUrls: ['./add-payroll.component.css']
})
export class AddPayrollComponent implements OnInit {

  constructor(private service:AddPayrollModelService) { }

  ngOnInit() {
  }

  onsubmit(f:NgForm) {
    console.log(f.value);

    if (f.valid) {
      this.service.addPayrollModel(f);
    }
  }

}
