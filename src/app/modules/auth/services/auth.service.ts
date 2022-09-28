import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public token: string =''
  public auth: boolean = false
  
  generateToken(user:string,password:string){
    if(user!=='root' || password !=="root"){
      localStorage.setItem("auth","false")
      this.auth=false
    }else{
      localStorage.setItem("user",user)
      localStorage.setItem("password",password)
      localStorage.setItem("api_key","ibeDI9Vfya1CzELlygx0wAm4CyAwImRwVBDyVmC6")
      localStorage.setItem("auth","true")
      this.auth=true
    }
    return this.auth
  }
  getSession(){
    if(localStorage.getItem("auth")==="false"){
      return false
    }else{
      return true
    }
  }
}
