import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Prime Ng Imports
import { PrimeModule } from './Shared/prime.module'

// Angular Material Imports
import { MaterialModule } from './Shared/material.module';
import { AddressComponent } from './address/address.component';
import { PredictionsComponent } from './predictions/predictions.component';


@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    PredictionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    PrimeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
