import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'mw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required], 
  });
  
  constructor(
    private fb: FormBuilder,
    // private authenticationService: AuthenticationService
  ) {}

  onSubmit(): void {
    // login logic
    if(this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}

interface LoginRequest {
  username: string; 
  password: string;
}