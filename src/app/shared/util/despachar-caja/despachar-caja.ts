// Importaciones necesarias de Angular y otros módulos
import { Component, Inject } from "@angular/core"; // 'Component' para definir el componente y 'Inject' para inyectar datos en el constructor
import { FormBuilder, FormsModule } from "@angular/forms"; // 'FormBuilder' para manejar formularios reactivos, 'FormsModule' para formularios en Angular
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog"; // 'MAT_DIALOG_DATA' para obtener datos inyectados en un diálogo, 'MatDialogRef' para manejar el diálogo
import { CommonModule } from "@angular/common"; // 'CommonModule' contiene directivas comunes como *ngIf y *ngFor
import { MaterialModule } from "../../../material.module"; // Importar un módulo de Angular Material con componentes como botones y formularios
import { UserFormDialog } from "../user-form/user-form-message"; // Se asume que es otro componente o servicio relacionado con formularios de usuario
import { HttpClient, HttpClientModule } from "@angular/common/http";

// Definición de tipos personalizados, en este caso 'orientations' puede tener uno de los valores especificados.
export type orietations = "p" | "portrait" | "l" | "landscape";

// Decorador @Component que define metadatos para el componente
@Component({
  selector: 'despacharCaja', // El selector que se usará para insertar este componente en el HTML
  templateUrl: './despachar-caja.html', // Ruta al archivo de la plantilla HTML del componente
  styleUrls: ['./despachar-caja.css'], // Ruta al archivo de estilos CSS del componente
  standalone: true, // Indica que este componente es independiente (no necesita de un módulo principal)
  imports: [MaterialModule, CommonModule, FormsModule, HttpClientModule] // Módulos importados para usar dentro de este componente
})
export class DespacharCaja {
  dialog: any; // Variable sin tipado definida para el diálogo (probablemente usado en otro momento)

  // Variables que controlan los atributos y el estado del diálogo
  title = ''; // Título del diálogo
  color = 'pink'; // Color predeterminado
  bColor = ''; // Color de fondo, se determinará en función de los datos recibidos
  mini = false; // Indica si el diálogo es mini
  class = ''; // Clases CSS que se aplicarán dinámicamente al diálogo

  // Variables relacionadas con el formulario (por ejemplo, username, contraseña, dirección)
  conpassword: any;
  username: any;
  id: any;
  address: any;
  password: any;

  clientes: any[] = []
  productos: any[] = []

  clienteSelected = ''

  myUser = JSON.parse(sessionStorage.getItem("bodegax") || "{'uuid': ''}").uuid;


  // Constructor del componente
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, // Inyecta los datos que se pasaron al abrir el diálogo
    private fb: FormBuilder, // FormBuilder para la creación de formularios reactivos
    private mydialog: MatDialogRef<DespacharCaja>, // Referencia al diálogo, se usa para cerrarlo desde el código
    private http: HttpClient
  ) {
    // Inicializa las variables usando los datos inyectados
    this.title = data.title; // Asigna el título recibido en los datos inyectados
    this.color = data.color; // Asigna el color recibido en los datos inyectados
    this.class += data.color; // Añade la clase CSS correspondiente al color
    this.bColor = 'b' + data.color; // Asigna el color de fondo combinando una 'b' con el color recibido

    this.clientes = data.clientes
    this.productos = data.productos

    // Determina si el diálogo debe ser "mini" (pequeño) o no, basado en los datos inyectados
    if (data.size) {
      this.class += ' dialog-mini'; // Si 'size' es verdadero, añade la clase 'dialog-mini'
    } else {
      this.class += ' dialog'; // Si no, añade la clase 'dialog'
    }
  }

  // Método que se llama al hacer clic en el botón de cancelar
  cancel() {
    this.mydialog.close(false); // Cierra el diálogo y devuelve 'false' para indicar que la acción fue cancelada
  }

  // Método que se llama al hacer clic en el botón de confirmar
  confirmar() {
    var totalVenta = 0
    this.productos.forEach(p => {
      if (p.quantity > 0) {
        totalVenta += (p.precio * p.quantity)
      }
    })

    if (totalVenta == 0) {
      this.mydialog.close(true);
    }


    this.http.post("http://localhost:8080/ventas/create", {
      uuid_admin: this.myUser,
      uuid_cliente: this.clienteSelected,
      total_venta: totalVenta,
      fecha: new Date()
    }).subscribe((res: any) => {
      if (res) {
        this.productos.forEach((p: any, i) => {
          if (p.quantity > 0) {
            this.http.post("http://localhost:8080/producto-ventas/create", {
              uuid_producto: p.uuid,
              uuid_venta: res.uuid,
              cantidad: p.quantity,
              total_parcial: (p.quantity * p.precio)
            }).subscribe((res2: any) => {
              this.http.put("http://localhost:8080/productos/edit", {
                uuid: p.uuid,
                nombre: p.nombre,
                precio: p.precio,
                stock: p.stock - p.quantity
              }).subscribe((res3: any) => {
                if (i == this.productos.length - 1) {
                  this.mydialog.close(true);
                }

              })
            })
          }
        })
      }
    })
    // Cierra el diálogo y devuelve 'true' para indicar que la acción fue confirmada
  }
}
