import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LettersNumberOnlyDirective } from '../libs/directives/letters-number-only.directive';



@NgModule({
  declarations: [
    LoginComponent,
    LettersNumberOnlyDirective
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    

  ],
  exports:[
    
  ]
})
export class AuthModule { }
