import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car1Component } from 'src/app/shared/components/car1/car1.component';
import { Car2Component } from 'src/app/shared/components/car2/car2.component';
import { Car3Component } from 'src/app/shared/components/car3/car3.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    Car1Component,
    Car2Component,
    Car3Component,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Car1Component,
    Car2Component,
    Car3Component,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ]
})
export class SharedModule { }
