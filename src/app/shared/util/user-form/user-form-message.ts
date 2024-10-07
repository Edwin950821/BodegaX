import { Component, Inject } from "@angular/core";
// Importación de decoradores y clases necesarias para definir un componente y gestionar la inyección de dependencias
import { FormBuilder, FormsModule } from "@angular/forms";
// Importación para crear formularios reactivos en Angular
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
// Importación de clases para trabajar con diálogos modales de Angular Material
import { CommonModule } from "@angular/common";
// Importación de módulo común para funcionalidades básicas de Angular
import { MaterialModule } from "../../../material.module";
// Importación de un módulo personalizado de Angular Material
import { HttpClient, HttpClientModule } from "@angular/common/http";
// Importación de clases para realizar solicitudes HTTP
import { Router } from "@angular/router";
// Importación de clase para manejar la navegación
import { AppService } from "../../../app.service";
// Importación de un servicio personalizado de la aplicación
import { MessageDialog } from "../dialog/dialog-message";
// Importación de un componente para mostrar mensajes a los usuarios

// Definición de un tipo para orientaciones (puede ser usado en otro lugar del código)
export type orietations = "p" | "portrait" | "l" | "landscape"

@Component({
  selector: 'MessageDialog',  // Selector para usar este componente en plantillas HTML
  templateUrl: 'user-form-message.html',  // Archivo HTML de la plantilla
  styleUrls: ['./user-form-message.css'],  // Archivo CSS para estilos específicos
  standalone: true,  // Indica que el componente es autónomo
  imports: [MaterialModule, CommonModule, FormsModule, HttpClientModule] // Módulos importados para su uso en este componente
})
export class UserFormDialog {
  // Propiedades del componente que almacenan datos del formulario
  method = 'new';  // Método de operación, puede ser 'new' o 'edit'
  username = '';   // Nombre de usuario
  address = '';    // Dirección
  password = '';   // Contraseña
  conpassword = ''; // Confirmación de contraseña
  id = '';         // ID del usuario
  uuid = '';       // UUID para identificar de manera única a un usuario

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,
    private dialog: MatDialog, private navegacion: Router, private http: HttpClient,
    private appSvc: AppService, private mydialog: MatDialogRef<UserFormDialog>) {
    // Constructor que inyecta dependencias necesarias y recibe datos del diálogo

    // Inicializa los campos del formulario si se proporcionan datos (en caso de edición)
    if (data?.uuid) {
      this.username = data.username;
      this.address = data.address;
      this.password = data.password;
      this.conpassword = data.password; // Pre-llena la confirmación de contraseña con la contraseña existente
      this.id = data.id;
    }
  }

  // Funciones del componente

  register() {
    // Método para registrar o editar un usuario
    if (this.username == '' || this.password == '' || this.conpassword == '' || this.id == '') {
      // Validación: verifica si los campos requeridos están vacíos
      this.dialog.open(MessageDialog, {
        data: {
          title: "Por Favor Rellenar Todos Los Campos"
        }
      });
      return; // Salir del método si hay campos vacíos
    }

    if (this.password != this.conpassword) {
      // Validación: verifica si la contraseña y su confirmación coinciden
      this.dialog.open(MessageDialog, {
        data: {
          title: "La Contraseñas no coinciden"
        }
      });
      return; // Salir del método si las contraseñas no coinciden
    }

    // Si se está editando (existe un UUID)
    if (this.data.uuid) {
      // Realiza una solicitud HTTP PUT para editar un usuario existente
      this.http.put(
        "http://localhost:8080/admin/edit", {
        role: "user",
        nombre: this.username,
        id: this.id,
        password: this.password,
        direccion: this.address,
        uuid: this.data.uuid
      }
      ).subscribe(res => {
        // Maneja la respuesta del servidor
        if (res) {
          this.dialog.open(MessageDialog, {
            data: {
              title: "Cliente editado Con Exito"
            }
          });
          this.mydialog.close(); // Cierra el diálogo
        }
      });
    } else {
      // Si se está creando un nuevo usuario
      this.http.post(
        "http://localhost:8080/admin/create", {
        role: "user",
        nombre: this.username,
        id: this.id,
        password: this.password,
        direccion: this.address,
      }
      ).subscribe(res => {
        // Maneja la respuesta del servidor
        if (res) {
          this.dialog.open(MessageDialog, {
            data: {
              title: "Cliente Creado Con Exito"
            }
          });
          this.mydialog.close(); // Cierra el diálogo
        }
      });
    }
  }

  cancel(){
    this.mydialog.close(false);
  }

}
