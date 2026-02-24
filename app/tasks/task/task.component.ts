import { Component, Input } from "@angular/core";


//Because we decided to grab whole task object we found  so we  create Task interface

interface Task{
        id: string,
        userId: string,
        title: string,
        summry: string,
        dueDate: string
}
@Component({
    selector: 'app-task',
    standalone: true,
    imports: [],
    templateUrl: './task.component.html',
    styleUrl: './task.component.css'

})
export class TaskComponent{
    // we need to catch the task that in Tasks cmp

    @Input({ required: true }) task!: Task;


    
}