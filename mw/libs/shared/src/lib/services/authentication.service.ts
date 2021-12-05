import { TitleCasePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LoginRequest, User, Role } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public baseUrl = ''; // environment

  private currentUserSubject: BehaviorSubject<any>;
  // public currentUser: Observable<any>;

  // store user in localStorage?

  userList: User[] = [
    {
      id: 1, 
      username: 'Admin', 
      password: '123', 
      role: Role.ADMIN
    },
    {
      id: 2, 
      username: 'User', 
      password: '123', 
      role: Role.USER
    }  
  ];
  
  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
  ) {    
    this.currentUserSubject = new BehaviorSubject(localStorage.getItem('user'));
  }

  public login(loginRequest: LoginRequest): Observable<User> {
    const user = this.userList.find((user) => this.credentialMatch(user, loginRequest));
    if (user) {
      this.snackBar.open(`Welcome ${user.username}.`, 'dismiss', {duration: 5000});
      this.currentUserSubject.next(user);
      localStorage.setItem('user', JSON.stringify({username: user.username, role: user.role}));
      this.router.navigate(['dashboard']);
    }
    return of(user ?? {} as User);
  }

  public logout(): void {
    this.currentUserSubject.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  public isUserAuthenticated(): boolean {
    return this.currentUserSubject.value != null;
  }
  
  private credentialMatch(user: User, loginRequest: LoginRequest): boolean {
    return user.password === loginRequest.password && user.username.toLowerCase() === loginRequest.username.toLowerCase();
  }

}

