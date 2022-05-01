import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PackageInfoComponent } from './package-info/package-info.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AllPackagesComponent } from './all-packages/all-packages.component';
import { AllTestimonialsComponent } from './all-testimonials/all-testimonials.component';
import { AllMediaComponent } from './all-media/all-media.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'all-package-info',
    component: AllPackagesComponent
  },
  {
    path: 'package-info',
    component: PackageInfoComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'all-testimonials',
    component: AllTestimonialsComponent
  },
  {
    path: 'all-media',
    component: AllMediaComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
