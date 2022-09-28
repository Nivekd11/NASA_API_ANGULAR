import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-robert',
  templateUrl: './robert.component.html',
  styleUrls: ['./robert.component.scss']
})
export class RobertComponent implements OnInit {

  public form!: FormGroup
  public items!: any
  constructor(private search: SearchService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      dateT: new FormControl("",[Validators.required])
    })
    
  }

  searchImage(){
    
    this.search.searchRobert(this.form.get("dateT")?.value).subscribe(response => {
      console.log(response)
      this.items=response.photos
    })
  }

}
