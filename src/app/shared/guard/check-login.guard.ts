import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AppService } from "../../app.service";
import { Observable, map, take } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {
    constructor(private appSvc: AppService, private router: Router){}

    canActivate(): Observable<boolean> {
        return new Observable<boolean>((o)=>{
            this.appSvc.isLogged$.subscribe(r=>{
                if(r==false){
                    this.router.navigate(['/login'])
                    o.next(false)
                    o.complete();
                }else{
                    o.next(true)
                    o.complete();
                }
            })
        })
    }
}