import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from "@angular/forms";
import { CourseComponent } from './course/course.component';
import { CourseFilterComponent } from './course-filter/course-filter.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { NgContentTestComponent } from './ng-content-test/ng-content-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CourseComponent,
    CourseFilterComponent,
    CustomerListComponent,
    ViewChildComponent,
    NgContentTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  // bootstrap means the component which will be treated as main component
  bootstrap: [AppComponent]
})
export class AppModule { }
