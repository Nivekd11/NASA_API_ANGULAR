import { NgModule } from '@angular/core';
import { DialogComponent } from './components/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ErrorSearchComponent } from './components/error-search/error-search.component';

@NgModule({
  declarations: [
    DialogComponent,
    
  ],
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports:[
    DialogComponent,
    
  ]
})
export class SharedModule { }
