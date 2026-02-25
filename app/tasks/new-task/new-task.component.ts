import { Component, EventEmitter,  Output } from '@angular/core';
import { Task } from '../task/task.module';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  
  //we use void as we dont't send anny data 
  // we just need the signal from DOM
  @Output() cansel = new EventEmitter <void>();

  onCancel() {
    this.cansel.emit();
  }
}
