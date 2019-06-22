import { Component, OnInit } from '@angular/core';
import { ManageNoticeService } from './manage-notice.service';

@Component({
  selector: 'app-manage-notice',
  templateUrl: './manage-notice.component.html',
  styleUrls: ['./manage-notice.component.css']
})
export class ManageNoticeComponent implements OnInit {

  notices:any[];
  constructor(private service:ManageNoticeService) { }

  ngOnInit() {

    this.service.getNotice()
    .subscribe(response=>{
      if(JSON.parse(JSON.stringify(response)).statusCode==="S1000"){
        this.notices=JSON.parse(JSON.stringify(response))['content'];
        console.log(this.notices);
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


  delete(id:string){
    if(window.confirm('Are sure you want to delete this item ?')){
      this.service.deleteNotice(id);
   }
  }

}
