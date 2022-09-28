import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/guards/auth.guard';
import { ApodComponent } from './components/apod/apod.component';
import { MainComponent } from './components/main/main.component';
import { RobertComponent } from './components/robert/robert.component';

const routes: Routes = [{
  path: '',
  children:[
    {
      path:'robert',
      component: RobertComponent,
      canLoad: [AuthGuard]
    },
    {
      path:'main',
      component: MainComponent,
      canLoad: [AuthGuard]
      
    },
    {
      path: 'apod',
      component: ApodComponent
    }
  ]
}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
