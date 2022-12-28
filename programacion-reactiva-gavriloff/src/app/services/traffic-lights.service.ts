import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrafficLightsService {

  private lights = new BehaviorSubject<string>('Green')
  public lights$ = this.lights.asObservable()
  private lastValue : string = 'Green'

  constructor() {
    this.lights.subscribe((value) => (this.lastValue = value));
    interval(500).subscribe(() => this.lastValue === 'Green' ? this.lights.next('Red') : this.lights.next('Green'));
   }
}
