import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of, tap } from 'rxjs';
import DialogHelper from 'src/app/modules/libs/helpers/dialog.helper';
import ValidatorHelper from 'src/app/modules/libs/helpers/validator.helper';
import { DialogComponent } from 'src/app/modules/shared/components/dialog/dialog.component';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  //items!: any
  form!: FormGroup
  public items$!: Observable<any>;
  flag: boolean= false

  constructor(private searchService: SearchService,private sanitizer: DomSanitizer,public dialog: MatDialog,private activeRoute:ActivatedRoute) {
     this.items$ = this.activeRoute.data.pipe(
      map( (response:any) =>{
        return response.apodData
      })
     )
   }

  ngOnInit(): void {
    this.form= new FormGroup({
      startDate: new FormControl("",Validators.required),
      endDate: new FormControl("",Validators.required)
    })
  }

  searchItems(){
    console.log(this.form.get("startDate")?.value,this.form.get("endDate")?.value)
    if(ValidatorHelper.validateDate(this.form.get("startDate")?.value,this.form.get("endDate")?.value)){
      this.items$ = this.searchService.searchApod(this.form.get("startDate")?.value,this.form.get("endDate")?.value)
      this.flag=false
    }else{
      this.flag=true
    }
  }

  cleanUrl(url: string){
    let regExp: RegExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match: any = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
  }

  openDialog(item: any): void {
    // const dialogRef = this.dialog.open(DialogComponent, {
    //   width: '100%',
    //   data: item
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   console.log(result)
    // });
    DialogHelper.openDialog(item,this.dialog)
  
  }


}
