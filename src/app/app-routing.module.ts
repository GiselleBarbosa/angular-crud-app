import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasListComponent } from './categorias-list/categorias-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoriasAddComponent } from './categorias-add/categorias-add.component';
import { CategoriasEditComponent } from './categorias-edit/categorias-edit.component';


const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'dashboard',
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'categorias',
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'list',
        },
        {
          path: 'list',
          component: CategoriasListComponent,
        },
        {
          path: 'add',
          component: CategoriasAddComponent,
        },
        {
          path: 'edit',
          component: CategoriasEditComponent,
        },
      ],
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
