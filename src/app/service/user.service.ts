import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RootState } from '../store';
import { clearUser, setUser } from '../store/actions/user.actions';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router, private _snackBar: MatSnackBar, private store: Store<RootState>) { }

  signup(username: string, passwoord: string): void {
    // Pull users from local storage
    let users = JSON.parse(localStorage.getItem("users"));
    if(users === null) {
      users = [];
    }
    // See if that user actually exists
    let usersByName = users.filter(u => u.username = username);
    if (usersByName.length === 0) {
      // Add the new user to a user list
      users.push({username: username, password: password})
      localStorage.setItem('users', JSON.parse(users));
      // Call login
      this.login(username, password);
    }
    else {}

  }

  login(username: string, password: string): void {
    let users = JSON.parse(localStorage.getItem("users"));
    if (users === null) {
      users = [];
    }
    let userByName = users.filter(u => u.username = username && u.password === password)[0];
    if (userByName) {
    // Save to state
    this.store.dispatch(setUser({username: userByName[0].username}))
    this.router.navigate(['/search']);
  }
  else {
    this._snackBar.open("Invalid username or password", null, {
      duration: 2000,
    })
  }

  logout() {
    this.store.dispatch(clearUser());
    this.router.navigate(['user']);
  }
}
