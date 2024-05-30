import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BodegaX-angular';

  constructor(private router: Router){

  }

  ngOnInit(): void {
    var session = sessionStorage.getItem("bodegax")
    if (session==undefined){
      this.router.navigate(["/login"])
    }
  }
}
