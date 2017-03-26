import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FilterPipe} from '../../filter/filter.pipe';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users :Object[];
  search: any;
  devices = 'one two three'.split(' ');
  selectedDevice = 'two';
  order = 'orderByScore accending decending'.split(' ');

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.authService.getAllProfile().subscribe(profile => {
      this.users = profile.users;
    },
    err => {
      console.log(err);
      return false;
    })
  }

  onChange(deviceValue) {
    console.log(deviceValue);
  }

  onOrder(order){
    this.users = this.users.sort(function(a:any, b:any){
      console.log(order);
      if(order === 'decending'){
        return a.score-b.score;
      } else if(order === 'accending') {
        return b.score-a.score;
      } else{
        return 0;
      }
    });
  }

}
