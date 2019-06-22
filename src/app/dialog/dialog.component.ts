import { Component, OnInit } from '@angular/core';
// import { MdDialog, MdDialogRef } from '@angular/material';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor() {}

  public confirmMessage:string;

  ngOnInit() {
  }

}
