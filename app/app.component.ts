import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,UserComponent,TasksComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  //we shall get user id once clicked in useCopmonent
  //Search in our Db for the user
  // Send the name of the user to tasksComponent

  /////init value for our selected user
  selectedUserId = 'u1';

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }
  
  onSelectUser(id: string) {
    this.selectedUserId = id;

    console.log('Selected user Id ' + id);
    
  }
}
