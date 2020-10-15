import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Gif } from '../interface/gif.interface';
import { RootState } from '../store';
import { setFavorites } from '../store/actions';
import { getUserId } from '../store/selectors/user.selectors';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  userId: number;

  constructor(private http: HttpClient, private store: Store<RootState>, private _snackBar: MatSnackBar) {
    this.store.select(getUserId).subscribe(uId => this.userId = uId);
  }

  addFavorite(gif: Gif) {
    // Make the API Call /api/favorites/add
    this.http.post(`api/favorites/add/`, {userId: this.userId, gif: gif}).subscribe(res => {
      if (res['success']) {
        this.userFavorites();
      }
      // Handle the Response
      this._snackBar.open(res['msg'], null, {
        duration: 2000,
      })
    })
  }

  removeFavorite(id: number) {
    // Make the API Call
    this.http.delete(`/api/favorites/remove/${id}`).subscribe(res => {
    if (res['success']) {
      this.removeFavorite;
    }
    // Handle the Response
    this._snackBar.open(res['msg'], null, {
      duration: 2000,
    })
  })



  }

  userFavorites(): void {
    // Make the API Call /api/favorites
    this.http.get(`/api/favorites/user/${this.userId}`).subscribe(res => {
      if (res['success']) {
        this.store.dispatch(setFavorites({favorites: res['favorites']}))
      }
      // Handle the Response
      else {
        this._snackBar.open(res['msg'], null, {
          duration: 2000,
        });
      }
    })

  }

}
