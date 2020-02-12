import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';






@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    {
      path:'', component:HomeComponent},
     {path:'products', component:ProductsComponent }
  ]) ],
  declarations: [ AppComponent, HelloComponent,BsNavbarComponent,CheckOutComponent,HomeComponent,MyOrdersComponent,
 OrderSuccessComponent,ProductsComponent,ShoppingCartComponent,AdminOrdersComponent,AdminProductsComponent ],
  bootstrap:    [ AppComponent,BsNavbarComponent ]
})
export class AppModule { }
