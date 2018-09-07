// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Pages
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { NotAuthorizedPageComponent } from './pages/not-authorized-page/not-authorized-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'error',
    component: ErrorPageComponent
  },
  {
    path: 'not-authorized',
    component: NotAuthorizedPageComponent
  },
  {
    path: 'admin',
    loadChildren: '../admin/admin.module#AdminModule'
  },
  {
    path: 'home',
    loadChildren: '../home/home.module#HomeModule'
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }