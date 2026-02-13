import { Component,input, computed } from '@angular/core';
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
 /*  @Input({required:true})avatar!: string;
  @Input({required:true})name!: string;
  @Input({required:true})id!: string;
  

  get imagePath() {
    return 'assets/users/'+ this.avatar
  } */
  
  
  //signal based

  avatar = input.required<string>();
  name = input.required<string>();
  id = input.required<string>();

  imagePath = computed(() => {
    return ' assets/users/' + this.avatar();
  });
  
  onSelectUser() {

    console.log('New SelectorUser ' + this.name(),this.id());
  }
}
