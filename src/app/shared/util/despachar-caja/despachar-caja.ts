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

  myUser = JSON.parse(sessionStorage.getItem("bodegax") || "{'uuid': ''}").uuid; // Variable que almacena el usuario actual


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

  validVenta(): number { // Método que valida la venta
    var totalVenta = 0
    for (const p of this.productos) {// Recorre los productos
      if (p.quantity > 0) {// Si la cantidad es mayor a 0
        totalVenta += (p.precio * p.quantity)// Calcula el total de la venta
      }
      if (p.quantity > p.stock) {// Si la cantidad es mayor al stock
        window.alert('No hay en stock la cantidad solicitada')
        return 0
      }
    }

    if (totalVenta == 0 || this.clienteSelected == '') {// Si la venta es 0 o no se ha seleccionado un cliente
      window.alert('Debe escoger cliente y la venta no puede ser 0')
      return 0
    } else {
      return totalVenta // Devuelve el total de la venta
    }
  }
  // Método que se llama al hacer clic en el botón de confirmar
  confirmar() {
    const cant = this.validVenta()
    if (cant > 0) {
      this.http.post("http://localhost:8080/ventas/create", {
        uuid_admin: this.myUser, // Asigna el usuario actual
        uuid_cliente: this.clienteSelected, // Asigna el cliente seleccionado
        total_venta: cant, // Asigna el total de la venta
        fecha: new Date() // Asigna la fecha actual
      }).subscribe((res: any) => {// Realiza una petición POST al servidor
        if (res) { // Si la respuesta es correcta
          this.productos.forEach((p: any, i) => { // Recorre los productos
            if (p.quantity > 0) { // Si la cantidad es mayor a 0
              this.http.post("http://localhost:8080/producto-ventas/create", { // Realiza una petición POST al servidor
                uuid_producto: p.uuid, // Asigna el UUID del producto
                uuid_venta: res.uuid, // Asigna el UUID de la venta
                cantidad: p.quantity, // Asigna la cantidad
                total_parcial: (p.quantity * p.precio) // Calcula el total parcial
              }).subscribe((res2: any) => { // Realiza una petición POST al servidor
                this.http.put("http://localhost:8080/productos/edit", {
                  uuid: p.uuid, // Asigna el UUID del producto
                  nombre: p.nombre, // Asigna el nombre del producto
                  precio: p.precio, // Asigna el precio del producto
                  stock: p.stock - p.quantity // Resta la cantidad vendida al stock
                }).subscribe((res3: any) => { // Realiza una petición PUT al servidor

                  if (i == this.productos.filter(pr => pr.quantity > 0).length - 1) {
                    this.mydialog.close(true); // Cierra el diálogo y devuelve 'true' para indicar que la acción fue confirmada
                  }

                })
              })
            }
          })
        }
      })
    }


  }
}
