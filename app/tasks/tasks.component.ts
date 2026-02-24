import { Component,Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from './dummy-task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) name!:string;
  @Input({ required: true }) id!: string;
  tasks = DUMMY_TASKS;
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.id);
  }
}
