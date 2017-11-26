import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
 

export const routes: Routes = [
  { path: '', component: LoginComponent ,pathMatch: 'full'},
  { path: 'login', redirectTo: 'login' },
  { 
      path: 'App', component: HeaderComponent ,
      children: [
        { path: '', redirectTo:'Dashboard' ,pathMatch: 'full' },
        { path: 'Dashboard', component: DashboardComponent },
      ]
  },
  {path: '**',  redirectTo: 'login' }
   
];