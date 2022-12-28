import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrafficLightsService } from 'src/app/services/traffic-lights.service';

@Component({
  selector: 'app-car3',
  templateUrl: './car3.component.html',
  styleUrls: ['./car3.component.scss'],
})
export class Car3Component implements OnDestroy {
  lightsSubcription: Subscription;

  constructor(public trafficLightService: TrafficLightsService) {
    this.lightsSubcription = this.trafficLightService.lights$.subscribe(
      console.log
    );
  }

  ngOnDestroy(): void {
    this.lightsSubcription.unsubscribe();
  }
}
