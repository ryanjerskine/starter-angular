// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Pages
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
// Routing
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminPageComponent
  ]
})
export class AdminModule { }