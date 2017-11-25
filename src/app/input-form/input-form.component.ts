import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { userData } from '../user';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  @Output() newInputSender = new EventEmitter();

  searchClicked(userData: string){
    var newInput: string = userData;
    this.newInputSender.emit(newInput)
  }

  constructor() { }

  ngOnInit() {
  }

}
