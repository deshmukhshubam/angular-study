import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { EmployeesComponent } from './employees/employees.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent, data: {breadcrumb: 'Home'}},
  {path: "intro", component: IntroductionComponent, data: {breadcrumb: 'Introduction'}},
  {
    path: 'admin',
    component: AdminComponent,data: {breadcrumb: 'Administration'},
    children: [
      {
        path: 'employees',
        component: EmployeesComponent,
        data: {breadcrumb: 'employees'}
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {breadcrumb: 'login'}
      }
    ]
  },
  
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
