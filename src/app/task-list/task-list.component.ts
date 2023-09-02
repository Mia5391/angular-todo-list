import { Component } from '@angular/core';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  tasks: Task[] = [
    new Task("Visit Ann"), 
    new Task("Cook Dinner"),
    new Task("Wash Dishes"),
    new Task("Go to the gym"),
    new Task("Party Shopping"),    
  ]

  add(newTask: string){
    this.tasks.push(new Task(newTask))
  }
  remove(existingTask: Task){
    var userConfirmed = confirm(`Are you sure that you want to remove the following task? \n "${existingTask.title}"`)

    if(userConfirmed){
      this.tasks = this.tasks.filter(task => task != existingTask);
    }  
  }

}

class Task {
  constructor(public title: string){

  }
  toggleIsDone(){
    this.isDone = !this.isDone;

  }

  public isDone = false;
}

