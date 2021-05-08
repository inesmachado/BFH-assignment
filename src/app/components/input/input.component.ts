import { Component } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'input-component',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  textInput = "write something in the input field to change this label";

  inputFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern("^[0-9]*9+[0-9]*")
  ]);

  getErrorMessage() {
    let msg = "";

    if (this.inputFormControl.hasError("required")) {
      msg = "You must enter a value";
    }

    if (this.inputFormControl.hasError("minlength")) {
      msg = "Enter at least 3 characters";
    }

    if (this.inputFormControl.hasError("pattern")) {
      const regex = /[0-9]/g;
      let digit = this.inputFormControl.value.match(regex);

      const regex2 = /[9]/g;
      let nine = this.inputFormControl.value.match(regex2);

      msg = "Only digit are allowed";

      if (digit !== null && nine === null) {
        msg = "You must enter a 9";
      }
    }

    return msg;
  }

  modelChange(e: any) {
    this.textInput = e;
  }
}
