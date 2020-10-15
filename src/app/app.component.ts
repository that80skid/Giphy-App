import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from './service/user.service';
import { RootState } from './store';
import { getUserId } from './store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: number;
  constructor(private userService: UserService, private store: Store<RootState>){
    this.store.select(getUserId).subscribe(id => this.user = id);
  }
  logout(){
    this.userService.logout();
  }
}
