import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private showSidebar = new BehaviorSubject<boolean>(true);
  private isLogged = new BehaviorSubject<boolean>(true);
  private role = new BehaviorSubject<string>('client');

  constructor(private router: Router) {
    var session = sessionStorage.getItem("bodegax")
    if(session){
      this.isLogged.next(true)
      this.role.next(JSON.parse(session).role)
    }else{
      this.isLogged.next(false)
    }
  }

  get isLogged$(): Observable<boolean>{
    return this.isLogged.asObservable()
  }

  get role$(): Observable<string>{
    return this.role.asObservable()
  }

  get showSidebar$(): Observable<boolean>{
    return this.showSidebar.asObservable()
  }

  toggleSidebar(){
    if(this.showSidebar.getValue()){
      this.showSidebar.next(false)
    }else{
      this.showSidebar.next(true)
    }
  }

  openSidebar(){
    this.showSidebar.next(true)
  }
  closeSidebar(){
    this.showSidebar.next(false)
  }

  logOut(){
    sessionStorage.removeItem('bodegax')
    this.isLogged.next(false)
    this.role.next('client')
    this.router.navigate(['/login'])
  }

  logIn(user: any){
    sessionStorage.setItem('bodegax', JSON.stringify(user))
    this.isLogged.next(true)
    this.role.next(user.role)
    this.router.navigate(['/'])
  }
}
