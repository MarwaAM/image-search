import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ImagesComponent } from './components/images/images.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ImagesComponent
  ],
  providers: [
    importProvidersFrom(HttpClientModule),
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }