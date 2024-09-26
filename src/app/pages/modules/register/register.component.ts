// Importaciones necesarias para el funcionamiento del componente.
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialog } from '../../../shared/util/dialog/dialog-message';
import { AppService } from '../../../app.service';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser'; // Este import no se utiliza en el componente.

@Component({
  selector: 'app-register', // Selector del componente para usar en plantillas HTML.
  templateUrl: './register.component.html', // Ruta del archivo de plantilla HTML.
  styleUrls: ['./register.component.css'] // Ruta del archivo de estilos CSS.
})
export class RegisterComponent {
  // Propiedades del componente que almacenan los datos del formulario de registro.
  username = ''; // Almacena el nombre de usuario.
  address = ''; // Almacena la dirección.
  password = ''; // Almacena la contraseña.
  conpassword = ''; // Almacena la confirmación de la contraseña.
  id = ''; // Almacena el documento de identidad.

  // Constructor que inyecta los servicios necesarios.
  constructor(
    private dialog: MatDialog, // Servicio para mostrar diálogos.
    private navegacion: Router, // Servicio de navegación para redirigir.
    private http: HttpClient, // Servicio para realizar peticiones HTTP.
    private appSvc: AppService // Servicio de la aplicación para manejar la sesión.
  ) { }

  // Función que se llama al enviar el formulario de registro.
  register() {
    // Verifica si alguno de los campos obligatorios está vacío.
    if (this.username === '' || this.password === '' || this.conpassword === '' || this.id === '') {
      // Abre un diálogo informativo si hay campos vacíos.
      this.dialog.open(MessageDialog, {
        data: {
          title: "Por Favor Rellenar Todos Los Campos" // Mensaje de error.
        }
      });
      return; // Termina la ejecución de la función.
    }

    // Verifica si las contraseñas no coinciden.
    if (this.password !== this.conpassword) {
      // Abre un diálogo informativo si las contraseñas no coinciden.
      this.dialog.open(MessageDialog, {
        data: {
          title: "La Contraseñas no coinciden" // Mensaje de error.
        }
      });
      return; // Termina la ejecución de la función.
    }

    // Realiza una petición HTTP POST para crear un nuevo administrador.
    this.http.post("http://localhost:8080/admin/create", {
      role: "admin", // Rol del usuario.
      nombre: this.username, // Nombre del usuario.
      id: this.id, // ID del usuario.
      password: this.password, // Contraseña del usuario.
      direccion: this.address, // Dirección del usuario.
    }).subscribe(res => {
      // Verifica si la respuesta es exitosa.
      if (res) {
        // Abre un diálogo informativo indicando que el administrador fue creado.
        this.dialog.open(MessageDialog, {
          data: {
            title: "Admin Creado Con Exito" // Mensaje de éxito.
          }
        });

        // Realiza una segunda petición para iniciar sesión con las credenciales recién creadas.
        this.http.post("http://localhost:8080/admin/login", {
          username: this.username,
          password: this.password
        }).subscribe(res => {
          // Verifica si la respuesta es exitosa.
          if (res) {
            this.appSvc.logIn(res); // Inicia sesión en la aplicación.
          }
        }, error => {
          console.log(error); // Imprime el error en la consola.
          // Abre un diálogo informativo en caso de credenciales inválidas.
          this.dialog.open(MessageDialog, {
            data: {
              title: "Credenciales invalidas" // Mensaje de error.
            }
          });
        });
      }
    });
  }

  // Función de inicio de sesión (actualmente vacía).
  login() {

  }
}
