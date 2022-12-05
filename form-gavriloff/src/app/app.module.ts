import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterPageComponent } from './form/form.component';
import { ErrorHelperComponent } from './error-helper/error-helper.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    ErrorHelperComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
