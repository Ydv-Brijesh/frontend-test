import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  number = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a email';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  };

  getErrorMessagename() {
    if (this.name.hasError('required')) {
      return 'You must enter a name';
    }
    return this.name.hasError('name') ? 'Not a valid name' : '';
  }
  
  getErrorMessagenumber() {
    if (this.number.hasError('required')) {
      return 'You must enter a number';
    }
    return this.number.hasError('number') ? 'Not a valid number' : '';
  }

  getErrorMessagepassword() {
    if (this.password.hasError('required')) {
      return 'You must enter a password';
    }
    return this.password.hasError('password') ? 'Not a valid password' : '';
  }


  constructor() { }

  ngOnInit(): void {
  }

}
