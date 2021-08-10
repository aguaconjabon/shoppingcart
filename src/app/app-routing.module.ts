import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ShoppingcardComponent } from './pages/shoppingcard/shoppingcard.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shoppingcard', component: ShoppingcardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
