import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do List by Mia';
  tasks = [
    "Visit Ann", 
    "Cook Dinner",
    "Wash Dishes",
    "Go to the gym",
    "Party Shopping"
  ]
}
