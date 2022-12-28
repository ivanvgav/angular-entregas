import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageComponent } from './core/components/page/page.component';
import { SharedModule } from './modules/shared/shared.module';
import { AnimePageComponent } from './core/components/anime-page/anime-page.component';
import { AnimeItemComponent } from './shared/components/anime-item/anime-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    AnimePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
