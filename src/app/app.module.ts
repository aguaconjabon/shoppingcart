import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ShoppingcartService } from '../app/service/shoppingCart/shoppingcart.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { NavigatorHeaderComponent } from './components/navigator-header/navigator-header.component';
import { ProductComponent } from './components/product/product.component';
import { ProductService } from './service/product/product.service';
import { HomeComponent } from './pages/home/home.component';
import { ShoppingcardComponent } from './pages/shoppingcard/shoppingcard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavigatorHeaderComponent,
    BodyComponent,
    HomeComponent,
    ShoppingcardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductService, ShoppingcartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
