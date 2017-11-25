import { Component, Input, OnInit } from '@angular/core';
import { userData } from './user';
import { apiKey } from './env';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public userData: string;

  inputKey: string = apiKey.inputKey;

  searchInput(userToSearch: string){
    this.userData = userToSearch;
    console.log(this.userData + this.inputKey)
  }

  constructor() { }

  ngOnInit() {
  }

}
