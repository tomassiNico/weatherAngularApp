import { Component, OnInit } from '@angular/core';
import { CurrentWeatherService } from 'src/app/services/current-weather.service';
import { showUp } from 'src/app/animations/showUp.animation';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  animations: [showUp]
})
export class CurrentWeatherComponent implements OnInit {

  constructor(public weatherService : CurrentWeatherService) { }

  ngOnInit() {
  }

}
