import { Component, OnInit } from '@angular/core';
import { ReplyService } from './reply.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {

  replies: any[];
  reply;
  requests: any[];
  constructor(private service: ReplyService) { }

  ngOnInit() {

    this.service.getAllRequests()
    .subscribe(response => {
      if (JSON.parse(JSON.stringify(response)).statusCode === 'S1000') {
        this.requests = JSON.parse(JSON.stringify(response))['content'];
        console.log(this.requests);
      } else {
        // alert(JSON.parse(JSON.stringify(response)).statusDescription);
        if (JSON.parse(JSON.stringify(response)).statusCode === 'E1003') {
          alert('No results Found');
        } else {
          alert('An unexpected error occurred');
        }
      }
    }, error => {
        alert('An unexpected error occurred');
    }
);


this.service.getReplies()
    .subscribe(response => {
      if (JSON.parse(JSON.stringify(response)).statusCode === 'S1000') {
        this.replies = JSON.parse(JSON.stringify(response))['content'];
        console.log(this.replies);
      } else {
        // alert(JSON.parse(JSON.stringify(response)).statusDescription);
        if (JSON.parse(JSON.stringify(response)).statusCode === 'E1003') {
          alert('No results Found');
        } else {
          alert('An unexpected error occurred');
        }
      }
    }, error => {
        alert('An unexpected error occurred');
    }
);
  }

  giveReply(reply) {

    console.log(reply);
    this.reply = reply;
  }

  onsubmit(f: NgForm) {

    console.log(f.value);

    const reply = {

      'requestId': this.reply.requestId,
      'requestedBy': this.reply.requestedBy,
      'requestedDate': this.reply.requestedDate,
      'date': this.reply.date,
      'reason': this.reply.reason,
      'checked': true,
      'approvedBy': {'eId': localStorage.getItem('number')},
      'approved': f.value.approved,
      'reply': f.value.reply,
      'valid': this.reply.valid
    };

    console.log(reply);

    this.service.addReply(reply);
  }

}
