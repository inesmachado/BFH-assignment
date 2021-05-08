import { Component } from '@angular/core';

@Component({
  selector: 'simple-input-component',
  templateUrl: './simple-input.component.html',
  styleUrls: ['./input.component.css']
})
export class SimpleInputComponent {
  textInput = "write something in the input field to change this label";

  modelChange(e: any) {
    this.textInput = e;
  }
}
