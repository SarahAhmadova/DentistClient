import { ServicesComponent } from './pages/services/services.component';
import { TeamCarouselComponent } from './components/team-carousel/team-carousel.component';
import { ServiceCarouselComponent } from './components/service-carousel/service-carousel.component';
import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { StaffComponent } from './pages/staff/staff.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgwWowModule } from 'ngx-wow';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { PhoneMaskDirective } from './shared/directives/phonemask.directive';
import { NotifierModule } from 'angular-notifier';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    BreadcrumbComponent,
    StaffComponent,
    AboutUsComponent,
    ServiceCarouselComponent,
    TeamCarouselComponent,
    ServicesComponent,
    PhoneMaskDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    NgbModule,
    HttpClientModule,
    CarouselModule,
    NgwWowModule,
    FormsModule,
    ReactiveFormsModule,
    NotifierModule
  ],
  exports:[PhoneMaskDirective],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
