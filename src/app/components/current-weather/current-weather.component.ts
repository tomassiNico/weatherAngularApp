import { Component, OnInit } from '@angular/core';
import { CurrentWeatherService } from 'src/app/services/current-weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  constructor(public weatherService : CurrentWeatherService) { }

  ngOnInit() {
  }

}
