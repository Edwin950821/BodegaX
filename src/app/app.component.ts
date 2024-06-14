import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BodegaX-angular';
  role = 'client'
  logged = false

  constructor(private router: Router, public appSvc: AppService){}

  ngOnInit(): void {
    var session = sessionStorage.getItem("bodegax")
    if (session==undefined){
      this.router.navigate(["/login"])
    }
    this.appSvc.role$.subscribe(r=>{
      this.role = r
    })
    this.appSvc.isLogged$.subscribe(r=>{
      this.logged = r
    })
  }

  inicio(){
      
  }

  historial(){

  }
  setting(){
    
  }

  logOut(){
    this.logged = false
    this.appSvc.logOut();
  }

  view(){
    
  }

  
  
}

