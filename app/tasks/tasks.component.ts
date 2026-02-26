import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { DUMMY_TASKS } from './dummy-task';
import { NewTaskData } from './task/task.module';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;

  tasks = DUMMY_TASKS;

  isAddingTask = false;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.id);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    console.log('Task completed:', id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
    console.log('Add Task clicked!');
  }
  onCancelAddTask() {
    this.isAddingTask = false;
    console.log('Taskcanceld');
    
  }

  onAddTask(taskData: NewTaskData) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.id,
      title: taskData.title,
      summry: taskData.summary,
      dueDate: taskData.dueDate
    })
    this.isAddingTask = false;

  }
}