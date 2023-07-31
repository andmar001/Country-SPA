import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';



@NgModule({
  declarations: [
    AboutPagesComponent,
    HomePageComponent,
    SidebarComponent,
    ContactPagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AboutPagesComponent,
    HomePageComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
