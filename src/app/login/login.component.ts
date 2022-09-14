import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  auth: any
  hide = true;


  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required,  Validators.email]),
    user: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(10), Validators.minLength(10)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(6)]),

  })
  

  constructor(private authservice: AuthService) { }


  ngOnInit(): void {
  }

  loginUser() {
    console.log(this.loginForm.valid);

    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}
