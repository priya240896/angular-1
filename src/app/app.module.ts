import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import{AngularFireAuthModule} from 'angularfire2/auth';

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
import { LoginComponent } from './login/login.component';


@NgModule({ 
  imports:      [ BrowserModule, FormsModule,
  AngularFireModule.initializeApp({ 
    apiKey: "AIzaSyCV2nM9AcwyxyTFIEZhCsXo__gyCild5lA",
  authDomain: "angular-cdzsej-60007.firebaseapp.com",
  databaseURL: "https://angular-cdzsej-60007.firebaseio.com",
  projectId: "angular-cdzsej-60007",
  storageBucket: "angular-cdzsej-60007.appspot.com",
  messagingSenderId: "324469911241",
  appId: "1:324469911241:web:be2dabe5ff036bded0a718",
  measurementId: "G-7RG1KND8GF"
   
    }),
  AngularFireDatabaseModule,
  AngularFireAuthModule,
   NgbModule,
   RouterModule.forRoot([
    {
      path:'', component:HomeComponent},
     {path:'products', component:ProductsComponent },
      { path:'shopping-cart', component:ShoppingCartComponent},
      { path:'check-out', component:CheckOutComponent},
      { path:'order-success', component:OrderSuccessComponent},
      { path:'login', component:LoginComponent},
       { path:'my-orders', component:MyOrdersComponent},
      { path:'admin/products', component:AdminProductsComponent},
      { path:'admin/orders', component:AdminOrdersComponent}

  ]) ],
  declarations: [ AppComponent, HelloComponent,BsNavbarComponent,CheckOutComponent,HomeComponent,MyOrdersComponent,
 OrderSuccessComponent,ProductsComponent,ShoppingCartComponent,AdminOrdersComponent,AdminProductsComponent,LoginComponent ],
  bootstrap:    [ AppComponent,BsNavbarComponent ]
})
export class AppModule { }
