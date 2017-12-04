import { Component } from '@angular/core';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = new User();
  submitted:boolean;
  states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WI','WY']
  confirm = '';
  subUser:User;

  onSubmit() {
    this.subUser = this.user
    this.user = new User();
    this.submitted = true
  }
  ngOnInit() {
    this.submitted = false;
    this.subUser = undefined;
  }
}
