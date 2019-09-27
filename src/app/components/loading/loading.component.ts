import { Component, OnInit } from '@angular/core';
import { loadingAnimation } from 'src/app/animations/loading.animation';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.sass'],
  animations: [loadingAnimation()]
})
export class LoadingComponent implements OnInit {

  _elements : string[] = ['#3A1787','#915EFF','#6A39D4','#877F09','#D4CA39'];
  public elements : string[] = this._elements;

  constructor() { }

  ngOnInit() {
    this.set();
  }

  set(){
    this.elements = this._elements;
    this.scheduleNextIteration();
  }

  scheduleNextIteration(){
    setTimeout(()=>{
      if (this.elements.length == 0) return this.set();
      this.clear();
    },     
    100 * this._elements.length + 500
    );
  }

  clear(){
    this.elements = [];
    this.scheduleNextIteration();
  }
}
