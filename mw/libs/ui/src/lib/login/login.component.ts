import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '@mw/shared'

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
    private authenticationService: AuthenticationService
  ) {}

  onSubmit(): void {
    // login logic
    if(this.loginForm.valid) {
      this.authenticationService.login(this.loginForm.value).subscribe(value => {
        // console.log(value);
      });
    }
  }
}