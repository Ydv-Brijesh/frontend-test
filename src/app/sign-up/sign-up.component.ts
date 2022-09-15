import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  hide= true;
  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.maxLength(6)]),
  });
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  signupUser(data:any){
    
   

    if (this.signupForm.valid) {
      this.signupForm.reset();
      console.log(data)
      this.toastr.success('Message Success!', 'Log In Success!');
    }else{
      this.toastr.error('Message Error!', 'Error!');
    }
  }

}
