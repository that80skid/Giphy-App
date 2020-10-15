import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Gif } from '../interface/gif.interface';
import { FavoritesService } from '../service/favorites.service';
import { RootState } from '../store';
import { getAllFavorites, getUserName } from '../store/selectors';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites: Gif[] = [];
  username: string;

  constructor(private store: Store<RootState>, private faveService: FavoritesService) {
    this.store.select(getAllFavorites).subscribe(faves => this.favorites = faves);
    this.store.select(getUserName).subscribe(user => this.username = user);
  }

  removeFavorites(id: number) {
    this.faveService.removeFavorite(id);
  }

  ngOnInit(): void {
  }

}
