import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./app/page/home/home.component').then(m => m.HomeComponent) 
  },
  { 
    path: 'login', 
    loadComponent: () => import('./app/page/login/login.component').then(m => m.LoginComponent) 
  },
  // Add more routes as needed
  { 
    path: '**', 
    redirectTo: '' 
  }
];