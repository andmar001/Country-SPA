import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPagesComponent } from './shared/pages/about-pages/about-pages.component';
import { ContactPagesComponent } from './shared/pages/contact-pages/contact-pages.component';
import { CountriesModule } from './countries/countries.module';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPagesComponent
  },
  {
    path: 'contact',
    component: ContactPagesComponent
  },
  {
    path: 'countries',
    loadChildren:() => import('./countries/countries.module').then(m => m.CountriesModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
