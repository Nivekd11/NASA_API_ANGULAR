import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import DialogHelper from 'src/app/modules/libs/helpers/dialog.helper';
import ValidatorHelper from 'src/app/modules/libs/helpers/validator.helper';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-robert',
  templateUrl: './robert.component.html',
  styleUrls: ['./robert.component.scss']
})
export class RobertComponent implements OnInit {

  public form!: FormGroup
  public items!: any
  public flag: boolean = false
  constructor(private search: SearchService,public dialog: MatDialog,public activeRoute: ActivatedRoute) { 
     this.activeRoute.data.subscribe(
      (response:any)=>{
        this.items= response.roverData
      }
     )
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      dateT: new FormControl("",[Validators.required])
    })
    
  }

  searchImage(){
    if(ValidatorHelper.validateOneDay(this.form.get("dateT")?.value)){
      this.search.searchRobert(this.form.get("dateT")?.value).subscribe(response => {
        console.log(response)
        this.flag=false
        this.items=response
      })
    }else{
        this.flag=true
    }
    
  }

  openDialog(item:any){
    DialogHelper.openDialog(item,this.dialog)
  }



}
