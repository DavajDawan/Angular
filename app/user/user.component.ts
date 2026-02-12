import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

//to add dynamic users I use Random choice
const randomIndex= Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];

  // Using get built in function in angular to manage
  // dynamic changes ub every render  we do in angular
  get imagePath() {
    return 'assets/users/'+ this.selectedUser.avatar
  }
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
    console.log('New SelectorUser ' + this.selectedUser.id);
  }
}
