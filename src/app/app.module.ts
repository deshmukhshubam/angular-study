import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {BreadcrumbsModule} from 'ng2-breadcrumbs';
import {FilterPipeModule} from 'ngx-filter-pipe';
import {OrderModule} from 'ngx-order-pipe';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { EmployeesComponent } from './employees/employees.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { FgdsfComponent } from './fgdsf/fgdsf.component';
import { TestModule } from 'src/test/test.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    EmployeesComponent,
    PageNotFoundComponent,
    HomeComponent,
    AdminComponent,
    FgdsfComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SmartTableModule,
    BreadcrumbsModule,
    TestModule,
    FormsModule,
    FilterPipeModule,
    OrderModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
