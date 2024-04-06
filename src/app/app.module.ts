import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ImagesComponent } from './components/images/images.component';
@NgModule({
	imports: [BrowserModule, CommonModule, FormsModule, MatIconModule],
	declarations: [AppComponent, HomeComponent, ImagesComponent],
	providers: [importProvidersFrom(HttpClientModule)],
	bootstrap: [AppComponent],
})
export class AppModule {}
