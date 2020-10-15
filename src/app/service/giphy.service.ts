import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RootState } from '../store';
import { setSearch } from '../store/actions';
import { Store } from '@ngrx/store';


@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private http: HttpClient, private store: Store<RootState>) { }

  searchGifs(query: string): void {
    const apiKey = 'uL9l2lMEgke1Oalrp70GyKfQFaAiLNLc'
    this.http.get(`https://api.giphy.com/v1/stickers/search?api_key=${apiKey}&q=${query}&limit=25&offset=0&rating=pg&lang=en`)
      .pipe(
        map((res: any) => res.data),
        map(data => data.map(gif =>
          ({
            gifId: gif.id,
            title: gif.title,
            url: gif.images.original.url
          })
        )
    )).subscribe(SearchResults => this.store.dispatch(setSearch({results: SearchResults})))
  }
}
