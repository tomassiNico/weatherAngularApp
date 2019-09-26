import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Coords } from '../structures/coords.structure';
import { Weather } from '../structures/weather.structure';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  public weatherSubject : Subject<any> = new Subject<any>();
  public weather$ : Observable<any>;

  private endPoint : string = 'https://api.openweathermap.org/data/2.5/forecast';

  //?lat=35&lon=139
  constructor(private http : HttpClient) { 
    this.weather$ = this.weatherSubject.asObservable().pipe(
      map(this.structureData)
    );

    this.get({
      lat: -31.424444,
      lon: -64.184077
    });
  }

  get(coords: Coords){
    let args = `?lat=${coords.lat}&lon=${coords.lon}&APPID=${environment.key}&units=metric`;
    let url = this.endPoint + args;

    if (isDevMode){
      url = 'assets/forecast.json';
    }

    this.http.get(url).subscribe(this.weatherSubject);

  }

  structureData(data: any){
    
    let minMaxPerDay = {};

    data.list.forEach(weatherElement => {
      let date = new Date(weatherElement.dt * 1000);
      let hours = date.getHours();
      let month = date.getMonth();
      let day = date.getDate();

      let key = `${month}-${day}`;

      let tempPerDay : Weather = minMaxPerDay[key] || {
        minMaxTemp : {}
      };

      if (!tempPerDay.minMaxTemp.min || tempPerDay.minMaxTemp.min > weatherElement.main.temp_min){
        tempPerDay.minMaxTemp.min = weatherElement.main.temp_min;
      }

      if (!tempPerDay.minMaxTemp.max || tempPerDay.minMaxTemp.max < weatherElement.main.temp_max){
        tempPerDay.minMaxTemp.max = weatherElement.main.temp_max;
      }

      minMaxPerDay[key] = tempPerDay;

    });

    return minMaxPerDay;
  }
}
