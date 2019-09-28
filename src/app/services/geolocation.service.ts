import { Injectable } from '@angular/core';
import { Coords } from '../structures/coords.structure';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  public coordsSubject : Subject<Coords> = new Subject<Coords>();
  public coords$ : Observable<Coords> = this.coordsSubject.asObservable();
  public coordsPromise : Promise<Coords>;
  public permisos$ : Promise<string>;

  constructor() { 
    //verifico si ya tengo permisos asignados
    this.permisos$ = (navigator as any).permissions.query({name: 'geolocation'})
                        .then((permisos) => {
                          return permisos.state
                        });
  }

  requestGeolocation(){
    // verifico si tengo permisos
      if (!this.coordsPromise){
        this.coordsPromise = this.getGeolocation();
      }

      this.coordsPromise.then((coords)=>{
        this.coordsSubject.next(coords);
      })
  }

  getGeolocation() : Promise<Coords>{
    return new Promise((res, rej)=>{
      if(!navigator || !('geolocation' in navigator)) return rej('Geolocalización no disponible');

        (navigator as any).geolocation.getCurrentPosition((position)=>{
          res({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        });      
    })
  }
}
