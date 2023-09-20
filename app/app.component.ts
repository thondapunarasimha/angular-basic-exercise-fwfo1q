import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
  hobbies = ['running', 'golf', 'dogs'];
  newHobby = '';

  addHobby() {
    if (this.newHobby) {
      this.hobbies.push(this.newHobby);
      this.newHobby = '';
    }
  }
  removeHobby(hobby: string) {
    console.log('remove:' + hobby);
    this.hobbies = this.hobbies.filter( h => h != hobby );
  }
}
