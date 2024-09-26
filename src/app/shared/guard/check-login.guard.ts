import { Injectable } from "@angular/core"; // Importa el decorador Injectable que permite inyectar este servicio en otros componentes o servicios.
import { CanActivate, Router } from "@angular/router"; // Importa la interfaz CanActivate para proteger rutas y Router para realizar la navegación.
import { AppService } from "../../app.service"; // Importa el servicio de la aplicación, que contiene la lógica de autenticación.
import { Observable, map, take } from "rxjs"; // Importa clases y operadores de RxJS para trabajar con flujos de datos asíncronos.

@Injectable({
    providedIn: 'root' // Indica que el servicio se puede inyectar a nivel de la raíz de la aplicación.
})
export class CheckLoginGuard implements CanActivate { // Define la clase CheckLoginGuard que implementa CanActivate.
    constructor(private appSvc: AppService, private router: Router) { } // Inyecta AppService y Router en el constructor.

    canActivate(): Observable<boolean> { // Método que determina si se puede activar la ruta.
        return new Observable<boolean>((o) => { // Crea un nuevo Observable que emite un valor booleano.
            this.appSvc.isLogged$.subscribe(r => { // Se suscribe al observable isLogged$ del servicio AppService.
                if (r == false) { // Si el usuario no está autenticado:
                    this.router.navigate(['/login']) // Redirige al usuario a la página de inicio de sesión.
                    o.next(false) // Emite false indicando que la ruta no puede ser activada.
                    o.complete(); // Completa el observable.
                } else { // Si el usuario está autenticado:
                    o.next(true) // Emite true indicando que la ruta puede ser activada.
                    o.complete(); // Completa el observable.
                }
            })
        })
    }
}
