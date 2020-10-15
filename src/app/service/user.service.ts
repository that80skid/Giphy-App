import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RootState } from '../store';
import { clearUser, setUser } from '../store/actions/user.actions';
import { FavoritesService } from './favorites.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router, private _snackBar: MatSnackBar, private store: Store<RootState>,
  private http: HttpClient, private faveService: FavoritesService ) { }

  signup(uname: string, pswd: string): void {
    this.http.post('/api/users/signup', {username: uname, password: pswd}).subscribe(res=>{
      if (res['success']) {
        this.login(uname, pswd);
      }
      else {
        this._snackBar.open(res['msg'], null, {
          duration: 2000,
        });
      }
    })
  }

  login(username: string, password: string): void {
    this.http.post('/api/users/login', {username: username, password: password}).subscribe(res=>{
      if (res['success']) {
        this.store.dispatch(setUser({username: res['username'], id: res['id']}))
        this.faveService.userFavorites();
        this.router.navigate(['/search']);

      }
      else {
        this._snackBar.open(res['msg'], null, {
          duration: 2000,
      });
    }
  })
}

  logout() {
    this.store.dispatch(clearUser());
    this.router.navigate(['/login']);
  }
}
