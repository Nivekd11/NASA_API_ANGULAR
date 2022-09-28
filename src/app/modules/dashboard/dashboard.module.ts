import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './components/main/main.component';
import { RobertComponent } from './components/robert/robert.component';
import { ApodComponent } from './components/apod/apod.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from '../shared/components/nav/nav.component';
import { TimePipe } from '../libs/pipes/time.pipe';
import { YouTubePlayerModule } from "@angular/youtube-player";

@NgModule({
  declarations: [
    MainComponent,
    RobertComponent,
    ApodComponent,
    NavComponent,
    TimePipe
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    YouTubePlayerModule
  ]
})
export class DashboardModule { }