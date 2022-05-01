import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { PackageInfoComponent } from './package-info/package-info.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';
import { PackageBookingFormComponent } from './package-booking-form/package-booking-form.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { MediaComponent } from './media/media.component';
import { NavbarOnlyComponent } from './navbar-only/navbar-only.component';
import { AllPackagesComponent } from './all-packages/all-packages.component';
import { PackageCarouselComponent } from './package-carousel/package-carousel.component';
import { AllTestimonialsComponent } from './all-testimonials/all-testimonials.component';
import { AllTestimonialsCarouselComponent } from './all-testimonials-carousel/all-testimonials-carousel.component';
import { AllMediaComponent } from './all-media/all-media.component';
import { AllMediaCarouselComponent } from './all-media-carousel/all-media-carousel.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    EcommerceComponent,
    PackageInfoComponent,
    HomeComponent,
    TestimonialsComponent,
    FooterComponent,
    PackageBookingFormComponent,
    GalleryComponent,
    AboutComponent,
    MediaComponent,
    NavbarOnlyComponent,
    AllPackagesComponent,
    PackageCarouselComponent,
    AllTestimonialsComponent,
    AllTestimonialsCarouselComponent,
    AllMediaComponent,
    AllMediaCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
