import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SettingsService} from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private service: SettingsService) { }

  ngOnInit() {
  }

  change(f: NgForm) {
    console.log(f.value);

    this.service.changePassword(f);

  }
}
