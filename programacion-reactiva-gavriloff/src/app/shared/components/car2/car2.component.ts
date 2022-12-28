import { Component, OnInit } from '@angular/core';
import { TrafficLightsService } from 'src/app/services/traffic-lights.service';

@Component({
  selector: 'app-car2',
  templateUrl: './car2.component.html',
  styleUrls: ['./car2.component.scss']
})
export class Car2Component implements OnInit {

  constructor(public trafficLightService : TrafficLightsService) { }

  ngOnInit(): void {
  }

}
