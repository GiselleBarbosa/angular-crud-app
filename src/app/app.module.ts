import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IconModule, UIShellModule } from 'carbon-components-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoriasListComponent } from './categorias-list/categorias-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoriasAddComponent } from './categorias-add/categorias-add.component';
import { CategoriasEditComponent } from './categorias-edit/categorias-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriasListComponent,
    DashboardComponent,
    NotFoundComponent,
    CategoriasAddComponent,
    CategoriasEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, UIShellModule, IconModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
