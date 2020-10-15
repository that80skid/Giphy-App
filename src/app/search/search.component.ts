import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Gif } from '../interface/gif.interface';
import { GiphyService } from '../service/giphy.service';
import { RootState } from '../store';
import { Store } from '@ngrx/store';
import { getUserName, getSearchResults } from '../store/selectors';
import { FavoritesService } from '../service/favorites.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  gifs: Array<Gif> = [];
  interval$: Observable<number>;
  username: string;
  username$: Observable<string>;
  constructor(private giphyService: GiphyService, private store: Store<RootState>, private faveService: FavoritesService) {
    this.username$ = this.store.select(getUserName);
    this.store.select(getUserName).subscribe(uname => this.username = uname);
    this.store.select(getSearchResults).subscribe(results => this.gifs = results);
   }

  searchGifs(search: string): void {
    this.giphyService.searchGifs(search);
  }

  addToFavorites(gif: Gif) {
    this.faveService.addFavorite(gif);
  }

  ngOnInit(): void {
    const searchBox = document.getElementById("search");
    const input$: Observable<string> = fromEvent(searchBox, 'input').pipe(
    // Make sure they're done typing (for now at least) before a search
      debounceTime(400),
    // Pay attention to inputEvent.target.value
      map(e => e.target['value']),
    // Don't search if it's less than 3 characters
      filter(query => query.length >= 3),
    // Only care about a search if the value ACTUALLY changes
      distinctUntilChanged()
    );
    // Auto search for the gifs with that string
    input$.subscribe(search => this.searchGifs(search));
    this.interval$ = interval(1000).pipe(
      map(time => time + 1)
    );
  }

}
