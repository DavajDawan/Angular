import { Component, input, output, computed } from '@angular/core';

import { type User } from './user.module';
//import { DUMMY_USERS } from '../dummy-users';

//to add dynamic users I use Random choice
//const randomIndex= Math.floor(Math.random()*DUMMY_USERS.length)
// Init user object

/* interface User{
  id:string,
  avatar: string,
  name: string
  
} */
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

   //Zone.js
/*   @Input({required:true})avatar!: string;
  @Input({required:true})name!: string;
  @Input({required:true})id!: string;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/'+ this.avatar
  } */
  
  
  //signal based
  user = input.required<User>();
  selected = input.required<boolean>();
  select = output<string>();

  imagePath = computed(() => {
    return ' assets/users/' + this.user().avatar;
  });
  
  onSelectUser() {
    this.select.emit(this.user().id);
    
  }
}
