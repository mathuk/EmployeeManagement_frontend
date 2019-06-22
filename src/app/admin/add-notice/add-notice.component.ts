import { AddNoticeService } from './add-notice.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.css']
})
export class AddNoticeComponent implements OnInit {

  constructor(private service:AddNoticeService) { }

  ngOnInit() {
  }

  onsubmit(f:NgForm){
    console.log(f.value);

    if(f.valid){
      this.service.addNotice(f);
    }
    
      
    }
  }


