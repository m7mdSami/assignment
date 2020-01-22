import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { SliderComponent } from './components/slider/slider.component';
import { AddComponent } from './components/add/add.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SliderComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
