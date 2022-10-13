import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,private route: ActivatedRoute, private navigate: Router) { }

  public form!: FormGroup
  public message:  boolean = false
  public buttonFlag: boolean = false

  ngOnInit(): void {
    this.form = new FormGroup({
      user: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])
    })
    
    console.log(this.form)
  }

  logIn(){
    console.log(this.form)
    this.message = !this.authService.generateToken(this.form.get("user")?.value,this.form.get("password")?.value)
    !this.message && this.navigate.navigateByUrl("dashboard/main")
    
    console.log(this.authService.auth)
  }

}
