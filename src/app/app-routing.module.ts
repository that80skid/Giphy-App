import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from "./search/search.component";
import { SignUpComponent } from './sign-up/sign-up.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SignUpComponent },
  {path: 'search', component: SearchComponent },
  {path: 'favorites', component: FavoritesComponent },
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
