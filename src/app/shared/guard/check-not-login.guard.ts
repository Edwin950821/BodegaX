import { Injectable } from "@angular/core"; // Importa el decorador Injectable para permitir la inyección de dependencias en Angular.
import { CanActivate, Router } from "@angular/router"; // Importa la interfaz CanActivate para proteger rutas y el Router para manejar la navegación.
import { AppService } from "../../app.service"; // Importa el servicio de aplicación que maneja el estado de autenticación.
import { Observable } from "rxjs"; // Importa Observable de RxJS para trabajar con flujos de datos asíncronos.

@Injectable({
    providedIn: 'root' // Permite que el servicio esté disponible en toda la aplicación.
})
export class CheckNotLoginGuard implements CanActivate { // Define la clase CheckNotLoginGuard que implementa CanActivate.
    constructor(private appSvc: AppService, private router: Router) { } // Inyecta AppService y Router en el constructor.

    canActivate(): Observable<boolean> { // Método que se llama para determinar si la ruta puede ser activada.
        return new Observable<boolean>((o) => { // Crea un nuevo Observable que emitirá un valor booleano.
            this.appSvc.isLogged$.subscribe(r => { // Se suscribe al observable isLogged$ del servicio AppService.
                if (r == true) { // Si el usuario está autenticado:
                    this.router.navigate(['']) // Redirige al usuario a la página de inicio (o cualquier ruta especificada).
                    o.next(false) // Emite false, indicando que la ruta no puede ser activada.
                    o.complete(); // Completa el observable.
                } else { // Si el usuario no está autenticado:
                    o.next(true) // Emite true, permitiendo la activación de la ruta.
                    o.complete(); // Completa el observable.
                }
            })
        })
    }
}
