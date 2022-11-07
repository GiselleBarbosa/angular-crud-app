import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { UIShellModule } from 'carbon-components-angular';
import { IconModule } from 'carbon-components-angular/icon';
import { CategoriasListComponent } from './categorias-list/categorias-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoriasAddComponent } from './categorias-add/categorias-add.component';

@NgModule({
  declarations: [ AppComponent, HeaderComponent, CategoriasListComponent, DashboardComponent, NotFoundComponent, CategoriasAddComponent],
  imports: [ BrowserModule, AppRoutingModule, UIShellModule, IconModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
