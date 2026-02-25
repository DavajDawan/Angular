import { Component, Input,Output,EventEmitter } from "@angular/core";
import { Task } from "./task.module";
import { DatePipe } from '@angular/common';

//Because we decided to grab whole task object we found  so we  create Task interface


@Component({
    selector: 'app-task',
    standalone: true,
    imports: [DatePipe,],
    templateUrl: './task.component.html',
    styleUrl: './task.component.css'

})
export class TaskComponent{
    // we need to catch the task that in Tasks cmp

    @Input({ required: true }) task!: Task;

    @Output() complete = new EventEmitter<string>();

    onCompleteTask() {
        this.complete.emit(this.task.id);
      
        
    }
     onAddTask() {
    console.log("Add task fungerar!");
  }



  
}