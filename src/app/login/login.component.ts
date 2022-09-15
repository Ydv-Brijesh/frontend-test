import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  users: any
  hide = true;


  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(10), Validators.minLength(10)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(6)]),

  })


  constructor(private userData: AuthService, private toastr: ToastrService) {

    // this.userData.users().subscribe((data)=>
    // {
    //   console.log("Student Data",data);
    // })
  }


  ngOnInit(): void {
  }

  loginUser(data: any) {
    // this.userData.saveUser(data).subscribe((result)=>{
    //   console.log(result)
    // })
 

    if (this.loginForm.valid) {
      this.userData.saveUser(data).subscribe((result) => {
        console.log(result)
      })
      this.loginForm.reset();
      this.toastr.success('Message Success!', 'Title Success!');
    }else{
      console.log(this.loginForm.valid);
      this.toastr.error('Message Error!', 'Title Error!');

    }
  }
}
