import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { UIShellModule } from 'carbon-components-angular';
import { IconModule } from 'carbon-components-angular/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIShellModule,
    IconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
