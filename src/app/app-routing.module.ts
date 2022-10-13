import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/services/guards/auth.guard';

const routes: Routes = [
  
  
  {
    path:'auth',
    loadChildren: ()=> import ('./modules/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'dashboard',
    loadChildren: ()=> import('./modules/dashboard/dashboard.module').then(m=>m.DashboardModule),
    canLoad: [AuthGuard],
    //canActivate: [AuthGuard]
  },
  
  {
    path:'**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
