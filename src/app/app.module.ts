import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    WeatherIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
