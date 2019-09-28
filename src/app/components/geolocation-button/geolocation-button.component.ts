import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation.service';

@Component({
  selector: 'app-geolocation-button',
  templateUrl: './geolocation-button.component.html',
  styleUrls: ['./geolocation-button.component.sass']
})
export class GeolocationButtonComponent implements OnInit {

  public active : boolean = false;
  constructor(public geolocationService : GeolocationService) { }

  ngOnInit() {
    this.geolocationService.permisos$.then((state)=>{
      this.active = (state == 'granted');
    })
  
  }

}
