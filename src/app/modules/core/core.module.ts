// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Pages
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { NotAuthorizedPageComponent } from './pages/not-authorized-page/not-authorized-page.component';
// Routing
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [
    NotFoundPageComponent,
    ErrorPageComponent,
    NotAuthorizedPageComponent
  ],
  exports: [
    RouterModule
  ]
})
export class CoreModule { }
