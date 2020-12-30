import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { Detector } from './shared/models/dets.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project11';
  detectors: Detector[] =[];
  
  constructor() {
    for (let i = 1; i<=10; i++) {
      this.detectors.push(new Detector(i, 'Датчик №' + i));
    }
  }
  NewDet(inputvalue:any) {
    let NewId;
    if (this.detectors.length === 0) {
      NewId =1;
    }
    else {
      NewId = this.detectors[this.detectors.length - 1].id + 1;
    }
    this.detectors.push(new Detector(NewId, inputvalue.value));
    inputvalue.value = '';
  }
  DeleteDet(index:number){
    this.detectors.splice(index, 1);
  }

}
