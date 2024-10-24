import { Component, Inject } from '@angular/core'; // Importa Component e Inject de Angular.
import { AppService } from '../../../app.service'; // Importa AppService de su ruta relativa.
import { MatDialog } from '@angular/material/dialog'; // Importa MatDialog de Angular Material.
import { DespacharCaja } from '../../../shared/util/despachar-caja/despachar-caja'; // Importa el componente DespacharCaja.
import { HttpClient } from '@angular/common/http'; // Importa HttpClient de Angular para hacer solicitudes HTTP.

@Component({
  selector: '/app-home', // Define el selector para el componente.
  templateUrl: './home.component.html', // Ruta al archivo HTML de la plantilla.
  styleUrl: './home.component.css' // Ruta al archivo CSS de los estilos.
})
export class HomeComponent { // Define la clase del componente HomeComponent.
  role = ''; // Propiedad para almacenar el rol del usuario, inicializada como cadena vacía.
  productos: any[] = []; // Propiedad para almacenar la lista de productos, inicializada como array vacío.
  clientes: any[] = []; // Propiedad para almacenar la lista de clientes, inicializada como array vacío.
  uuid_venta: any; // Propiedad para almacenar UUID de la venta.
  productos_venta: any; // Propiedad para almacenar productos de la venta.
  ventas: any; // Propiedad para almacenar las ventas.

  constructor(private dialog: MatDialog, private appSvc: AppService, private http: HttpClient) { }
  // Constructor que inyecta MatDialog, AppService y HttpClient.

  ngOnInit(): void {
    // Método del ciclo de vida que se ejecuta al inicializar el componente.
    // Obtener todos los productos.
    this.http.get("http://localhost:8080/productos/all").subscribe(
      (res: any) => {
        this.productos = res; // Almacena los productos recibidos en la propiedad productos.
        this.http.get("http://localhost:8080/admin/all").subscribe(
          (res2: any) => {
            this.clientes = res2.filter((r: any) => r.role == 'user'); // Filtra y almacena solo los clientes con rol 'user'.
          }
        );
      }
    );
  }

  solicitarCajas() {
    // Método para abrir el diálogo de solicitar cajas.
    this.dialog.open(DespacharCaja, { data: { title: '', clientes: this.clientes, productos: this.productos } });
  }

  terminar() { }
  // Método placeholder para finalizar alguna acción.

  openSidebar() {
    // Método para abrir la barra lateral utilizando AppService.
    this.appSvc.toggleSidebar();
  }

  icon() { }
  // Método placeholder, posiblemente para manejar iconos en el futuro.
}
