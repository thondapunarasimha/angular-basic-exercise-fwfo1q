import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hobby',
  template: `
    <li (click)="clickedName()">{{hobbyName}}</li>
  `
})
export class HobbyComponent {
  @Input() hobbyName: string;
  @Output() clickedHobby = new EventEmitter<string>();

  clickedName() {
    console.log(this.hobbyName);
    this.clickedHobby.emit(this.hobbyName);
  }
}