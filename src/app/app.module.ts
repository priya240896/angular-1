import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,BsNavbarComponent],
  bootstrap:    [ AppComponent,BsNavbarComponent ]
})
export class AppModule { }
