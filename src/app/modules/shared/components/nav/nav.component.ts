import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  closeSession(){
    localStorage.removeItem("user")
    localStorage.removeItem("password")
    localStorage.setItem("auth","false")
    this.router.navigate(['login'])
    
  }

}
