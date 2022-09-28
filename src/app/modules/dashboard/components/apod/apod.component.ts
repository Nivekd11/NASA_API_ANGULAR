import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  items!: any
  form!: FormGroup
  constructor(private searchService: SearchService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.form= new FormGroup({
      startDate: new FormControl("",Validators.required),
      endDate: new FormControl("",Validators.required)
    })
  }

  searchItems(){
    console.log(this.form.get("startDate")?.value,this.form.get("endDate")?.value)
    this.searchService.searchApod(this.form.get("startDate")?.value,this.form.get("endDate")?.value).subscribe(resp=>{

      console.log(resp)
      this.items=resp
    })
  }

  cleanUrl(url: string){
    let regExp: RegExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match: any = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
  }
}
