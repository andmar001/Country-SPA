import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPagesComponent } from './pages/about-pages/about-pages.component';



@NgModule({
  declarations: [
    AboutPagesComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutPagesComponent,
    HomePageComponent
  ]
})
export class SharedModule { }
