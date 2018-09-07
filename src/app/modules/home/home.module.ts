// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
// Routing
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomePageComponent,
    AboutPageComponent
  ]
})
export class HomeModule { }
