import { Component, EventEmitter,  Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.module';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  
  //we use void as we dont't send anny data 
  // we just need the signal from DOM
  @Output() cansel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  

 // we need to gtsb he values entered by user into add task form
  // as we see we haave 3 different values 

  // Title ==> enteredTitle ==> type:string ==> init_vslue:BP= '' or instructions
  enteredTitle = signal('');

  // Summary  ==> enteredSummary ==> type:string ==> init_vslue:BP= '' or instructions
  enteredSummary = '';

  // Date ==> enteredDate ==> type:string ==> init_value: BP= '' 
    enteredDate = '';

  onCancel() {
    this.cansel.emit();
  }

  // once we programmed our innput /output bindings with form
// we shall program Create(submit) button.
// our plan is.
/// 1-create listener for submit button.
///2- once wired we grab values from our binds props into object
///3- This onject  has # attributes that match our from input values.
///4- we need to packege them into one object  an push up to tasks.cmp where we have our array/DB of tasks.

//#1
  onSubmit(){
    this.add.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    });
    console.log(this.add);
    
}
}

