// Importaciones necesarias para el componente
import { Component } from '@angular/core'; // Importa la clase base para crear un componente
import { MatDialog } from '@angular/material/dialog'; // Importa el servicio de diálogo de Angular Material
import { MessageDialog } from '../../../shared/util/dialog/dialog-message'; // Importa un componente de diálogo personalizado para mostrar mensajes
import { Router } from '@angular/router'; // Importa el enrutador de Angular para la navegación
import { AppService } from '../../../app.service'; // Importa un servicio de aplicación personalizado
import { HttpClient } from '@angular/common/http'; // Importa el cliente HTTP para hacer peticiones

@Component({
  selector: 'app-login', // Selector del componente para usar en las plantillas
  templateUrl: './login.component.html', // Ruta al archivo de plantilla HTML
  styleUrl: './login.component.css' // Ruta al archivo de estilos CSS
})
export class LoginComponent {
  // Propiedades para almacenar el nombre de usuario y la contraseña
  username = ''; // Almacena el nombre de usuario ingresado
  password = ''; // Almacena la contraseña ingresada

  // Constructor del componente que inyecta dependencias
  constructor(private dialog: MatDialog, private router: Router, private appSvc: AppService, private http: HttpClient) {
    // Inicializa las dependencias necesarias
  }

  // Método para manejar el inicio de sesión
  login() {
    // Verifica si los campos de usuario y contraseña están vacíos
    if (this.username == '' || this.password == '') {
      // Abre un diálogo para mostrar un mensaje de error si los campos están vacíos
      this.dialog.open(MessageDialog, {
        data: {
          title: "Los campos no pueden estar vacios" // Mensaje que se muestra en el diálogo
        }
      });
      return; // Termina la ejecución del método
    }

    // Realiza una solicitud POST al servidor para iniciar sesión
    this.http.post("http://localhost:8080/admin/login", {
      username: this.username, // Envía el nombre de usuario
      password: this.password  // Envía la contraseña
    }).subscribe(res => {
      // Si la respuesta es exitosa
      if (res) {
        this.appSvc.logIn(res); // Llama al método logIn del servicio de la aplicación con la respuesta
      }
    }, error => {
      // Maneja cualquier error en la solicitud
      console.log(error); // Imprime el error en la consola
      // Abre un diálogo para mostrar un mensaje de error si las credenciales son inválidas
      this.dialog.open(MessageDialog, {
        data: {
          title: "Credenciales invalidas" // Mensaje que se muestra en el diálogo
        }
      });
    });
  }

  // Método para manejar el registro (actualmente incompleto)
  register() {
    // Verifica si los campos de usuario y contraseña están vacíos
    if (this.username == '' || this.password == '') {
      // Abre un diálogo para mostrar un mensaje de error si hay campos vacíos
      this.dialog.open(MessageDialog, {
        data: {
          title: "Hay campos vacios" // Mensaje que se muestra en el diálogo
        }
      });
      return; // Termina la ejecución del método
    }
    
  }
}
