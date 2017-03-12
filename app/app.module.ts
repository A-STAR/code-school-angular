import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { FormsModule }    from '@angular/forms'; // ngModel
import { HttpModule }     from '@angular/http';

import { DataProvider }   from './data.provider';

import { AppComponent }   from './app.component';
import { RacesComponent } from './races/races.component';

@NgModule({
  imports:      [
                  BrowserModule,
                  FormsModule,
                  HttpModule
                ],
  declarations: [
                  AppComponent,
                  RacesComponent
                ],
  providers:    [ DataProvider ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }