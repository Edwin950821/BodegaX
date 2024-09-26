import { NgModule } from '@angular/core'; // Importa el decorador NgModule para definir un módulo de Angular.
import { Component, signal } from '@angular/core'; // Importa Component y signal, que permite crear una señal reactiva.
import { CommonModule } from '@angular/common'; // Importa el módulo común que contiene funcionalidades básicas de Angular.

import { SettingsRoutingModule } from './settings-routing.module'; // Importa el módulo de enrutamiento para la configuración.
import { SettingsComponent } from './settings.component'; // Importa el componente que maneja la lógica de configuración.
import { MaterialModule } from '../../../material.module'; // Importa un módulo de Angular Material que incluye componentes UI.
import { CheckLoginGuard } from '../../../shared/guard/check-login.guard'; // Importa un guard que verifica si el usuario está autenticado.
import { CheckboxComponent } from '../../../checkbox/checkbox.component'; // Importa un componente reutilizable de casilla de verificación.
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa clases y módulos para trabajar con formularios.
import { AppComponent } from '../../../app.component'; // Importa el componente principal de la aplicación (generalmente no es necesario aquí).
import { RouterOutlet } from '@angular/router'; // Importa el RouterOutlet que permite la carga de componentes en función de la ruta activa.
import { last } from 'rxjs'; // Importa el operador 'last' de RxJS, aunque no se utiliza en este bloque.
import { HttpClientModule } from '@angular/common/http'; // Importa el módulo HttpClient para realizar peticiones HTTP.

@NgModule({
  declarations: [
    SettingsComponent, // Declara el componente de configuración dentro del módulo.
  ],
  imports: [
    CommonModule, // Importa el módulo común que proporciona directivas comunes como ngIf y ngFor.
    SettingsRoutingModule, // Importa el módulo de enrutamiento para gestionar las rutas de configuración.
    MaterialModule, // Importa el módulo de Angular Material para utilizar componentes de diseño.
    FormsModule, // Importa el módulo de formularios de Angular para trabajar con formularios de plantilla.
    RouterOutlet, // Importa RouterOutlet para la carga dinámica de componentes basados en rutas.
    ReactiveFormsModule, // Importa el módulo de formularios reactivos para crear formularios más complejos y escalables.
    HttpClientModule // Importa el módulo HttpClient para facilitar las solicitudes HTTP.
  ]
})
export class SettingsModule { // Define el módulo de configuración.

  form = signal<FormGroup>( // Declara una señal que representa un formulario reactivo.
    new FormGroup( // Inicializa un nuevo FormGroup con controles individuales.
      {
        name: new FormControl(''), // Control para el nombre, inicializado como vacío.
        addres: new FormControl(''), // Control para la dirección, inicializado como vacío.
        uuid: new FormControl(''), // Control para el UUID, inicializado como vacío.
        stock: new FormControl(''), // Control para el stock, inicializado como vacío.
        password: new FormControl(''), // Control para la contraseña, inicializado como vacío.
        role: new FormControl(''), // Control para el rol del usuario, inicializado como vacío.
        deleted: new FormControl(''), // Control para indicar si está eliminado, inicializado como vacío.
        langs: new FormControl([]), // Control para los idiomas, inicializado como un array vacío.
        employeesCount: new FormControl('') // Control para el conteo de empleados, inicializado como vacío.
      }
    )
  )
}
