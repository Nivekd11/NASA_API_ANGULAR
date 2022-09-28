import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInterceptor } from './modules/services/interceptors/search.interceptor';
import { SharedModule } from './modules/shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass : SearchInterceptor, multi: true
  }],
  exports:[],
  bootstrap: [AppComponent],
  
  
})
export class AppModule { }
