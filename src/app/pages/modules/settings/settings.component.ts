import { Component, OnInit } from '@angular/core'; // Importa las dependencias necesarias para crear un componente de Angular y manejar su ciclo de vida.
import { MatDialog } from '@angular/material/dialog'; // Importa el servicio para manejar diálogos de Material Angular.
import { UserFormDialog } from '../../../shared/util/user-form/user-form-message'; // Importa el componente de diálogo para el formulario de usuario.
import { HttpClient } from '@angular/common/http'; // Importa el servicio HttpClient para realizar peticiones HTTP.
import { ConfirmDialog } from '../../../shared/util/confirm/confirm-message'; // Importa el componente de diálogo para confirmar acciones.

@Component({
  selector: 'app-settings', // Define el selector del componente.
  templateUrl: './settings.component.html', // Especifica la plantilla HTML del componente.
  styleUrl: './settings.component.css' // Especifica los estilos CSS del componente (nota: debería ser `styleUrls`).
})
export class SettingsComponent implements OnInit { // Declara el componente que implementa OnInit.
  usuarios: any; // Declara una variable para almacenar la lista de usuarios.

  constructor(private dialog: MatDialog, private http: HttpClient) { } // Inyecta los servicios MatDialog y HttpClient.

  ngOnInit(): void { // Método que se llama cuando se inicializa el componente.
    this.getUsers(); // Llama a la función para obtener la lista de usuarios.
  }

  getUsers() { // Método para obtener usuarios desde la API.
    this.http.get("http://localhost:8080/admin/all").subscribe((res: any) => { // Realiza una petición GET a la API.
      this.usuarios = res; // Asigna la respuesta a la variable `usuarios`.
      this.usuarios = this.usuarios.filter((u: { role: string; }) => u.role == "user"); // Filtra los usuarios para obtener solo aquellos con rol "user".
      console.log(this.usuarios); // Muestra la lista de usuarios en la consola.
    });
  }

  form(): import("@angular/forms").FormGroup<any> { // Método que parece ser parte de un formulario, pero no está implementado.
    throw new Error('Method not implemented.'); // Lanza un error si se intenta llamar a este método.
  }

  guardar() { // Método para guardar cambios, aún no implementado.
    // Implementación pendiente.
  }

  crear() { // Método para abrir el diálogo de creación de usuario.
    this.dialog.open(UserFormDialog); // Abre el diálogo para crear un nuevo usuario.
  }

  editar(user: any) { // Método para editar un usuario existente.
    var res = this.dialog.open(UserFormDialog, {
      data: { // Abre el diálogo de edición con los datos del usuario.
        username: user.nombre,
        id: user.id,
        password: user.password,
        address: user.direccion,
        uuid: user.uuid
      }
    });
    res.afterClosed().subscribe(r => { // Después de cerrar el diálogo, se vuelve a obtener la lista de usuarios.
      this.getUsers();
    });
  }

  eliminar(user: any) { // Método para eliminar un usuario.
    var res = this.dialog.open(ConfirmDialog, { data: { title: "Estas seguro que desea eliminar este registro?" } }); // Abre un diálogo de confirmación.
    res.afterClosed().subscribe(r => { // Después de cerrar el diálogo, verifica si se confirmó la eliminación.
      if (r == true) { // Si el usuario confirmó:
        this.http.delete("http://localhost:8080/admin/delete", { body: user }).subscribe((x: any) => { // Realiza la petición DELETE para eliminar el usuario.
          this.getUsers(); // Vuelve a obtener la lista de usuarios actualizada.
        });
      }
    });
  }
}
