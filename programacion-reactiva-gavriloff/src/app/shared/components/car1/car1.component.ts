import { Component, OnInit } from '@angular/core';
import { TrafficLightsService } from 'src/app/services/traffic-lights.service';

@Component({
  selector: 'app-car1',
  templateUrl: './car1.component.html',
  styleUrls: ['./car1.component.scss']
})
export class Car1Component implements OnInit {

  constructor(public trafficLightService : TrafficLightsService) { }

  ngOnInit(): void {
  }

}
