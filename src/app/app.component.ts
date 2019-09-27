import { Component } from '@angular/core';
import { CurrentWeatherService } from './services/current-weather.service';
import { ForecastService } from './services/forecast.service';
import { GeolocationService } from './services/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'weatherApp';

  constructor(private weatherService : CurrentWeatherService,
              private forecastService : ForecastService,
              public geolocationService : GeolocationService){
  }

  ngOnInit(){
  }
}
