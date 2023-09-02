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

  add(newTask: string){
    this.tasks.push(newTask)
  }
  remove(existingTask: string){
    var userConfirmed = confirm(`Are you sure that you want to remove the following task? \n "${existingTask}"`)

    if(userConfirmed){
      this.tasks = this.tasks.filter(task => task != existingTask);
    }
  }
}


