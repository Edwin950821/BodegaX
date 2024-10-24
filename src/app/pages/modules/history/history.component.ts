// Importaciones necesarias
import { HttpClient } from '@angular/common/http'; // Se importa HttpClient para realizar solicitudes HTTP.
import { Component, OnInit } from '@angular/core'; // Se importan los decoradores Component y la interfaz OnInit.
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-history', // Nombre del selector para este componente.
  templateUrl: './history.component.html', // Ruta del archivo HTML del componente.
  styleUrl: './history.component.css' // Ruta del archivo CSS del componente.
})
export class HistoryComponent implements OnInit {
openSidebar() {
  this.appSvc.toggleSidebar()
} // Definición de la clase del componente que implementa OnInit.

  // Arrays para almacenar los datos del historial de ventas y los clientes.
  history: any[] = []; // Lista para almacenar el historial de ventas.
  client: any[] = []; // Lista para almacenar los datos de los clientes.
  productoventas: any[] = []; // lista para almacenar venta de productos.
  productos: any[] = []; // lista para traer todos los productos
role: any;

  // Constructor que inyecta el servicio HttpClient para realizar las peticiones HTTP.
  constructor(private  http: HttpClient, private appSvc:AppService) { 

    appSvc.role$.subscribe(r =>{
      this.role = r
      console.log(this.role)
    })
  }

  // ngOnInit es un hook del ciclo de vida de Angular que se ejecuta cuando el componente se inicializa.
  ngOnInit(): void {

    // Realiza una solicitud HTTP GET para obtener todos los clientes.
    this.http.get("http://localhost:8080/admin/all").subscribe( // Suscribe al observable para recibir la respuesta.
      (res2: any) => { // Callback que maneja la respuesta de los clientes.
        this.client = res2; // Asigna los datos de los clientes a la variable 'client'.

        // Realiza otra solicitud HTTP GET para obtener todas las ventas.
        this.http.get("http://localhost:8080/ventas/all").subscribe( // Segunda petición para obtener las ventas.
          (res: any) => { // Callback que maneja la respuesta de las ventas.
            this.history = res; // Asigna los datos de las ventas a la variable 'history'.
            console.log(this.history); // Muestra el historial de ventas en la consola.

            // Recorre cada venta para asociar el nombre del cliente.
            this.history.forEach((venta: any) => {
              // Busca en el array 'client' el cliente que coincida con 'uuid_cliente' de la venta.
              venta.cliente = this.client.find(c => c.uuid == venta.uuid_cliente).nombre;
            });

            this.http.get("http://localhost:8080/productos/all").subscribe(
              (res5: any) => {
                this.productos = res5

                this.http.get("http://localhost:8080/producto-ventas/all").subscribe(
                  (res4: any) => {
                    this.productoventas = res4

                    this.productoventas.forEach((pr: any) => {
                      // Busca en el array 'productos' el producto que coincida con 'uuid_producto' de la venta.
                      pr.producto = this.productos.find(c => c.uuid == pr.uuid_producto).nombre;
                    });

                    this.history.forEach ((venta: any)=> {
                      venta.detalle = this.productoventas.filter(c => c.uuid_venta == venta.uuid)
                    })
                  }
                )
              }
            )


            
          }
        );
      }
    );

    this.openSidebar();{
      this.appSvc.toggleSidebar()
    }
  }
}
