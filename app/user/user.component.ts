import { Component,Input } from '@angular/core';
//import { DUMMY_USERS } from '../dummy-users';

//to add dynamic users I use Random choice
//const randomIndex= Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

   //Zone.js
  @Input({required:true})avatar!: string;
  @Input({required:true})name!: string;
  

  get imagePath() {
    return 'assets/users/'+ this.avatar
  }
  
  /*  imagePath = computed(() => ' assets/users/' + this.selectedUser().avatar); */
  
  onSelectUser() {

    console.log('New SelectorUser ' + this.name);
  }
}
