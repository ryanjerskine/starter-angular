// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Pages
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }