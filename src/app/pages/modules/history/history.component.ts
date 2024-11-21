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


sidebarOpen: boolean = true;// Inicializa 'sidebarOpen' en 'true', indicando que el sidebar está abierto de forma predeterminada. Se utilizará para alternar la visibilidad del sidebar.
  isMobile: boolean = window.innerWidth <= 768; // Inicializa 'isMobile' en función del ancho actual de la pantalla. Si el ancho es menor o igual a 768px, se considera una pantalla móvil (true); de lo contrario, será false.
//
user2 = JSON.parse(sessionStorage.getItem("bodegax") || "{'role': ''}");

openSidebar() {
  this.appSvc.toggleSidebar()
  this.sidebarOpen = !this.sidebarOpen;

  
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



     // Detecta cambios en el tamaño de la pantalla
     window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 768;

      checkScreenSize(); {
        this.isMobile = window.innerWidth <= 768;
      }

    });

  }

   // Constructor que inyecta HttpClient, AppService y MatDialog.

   get shouldShowUserName(): boolean {
    return !this.sidebarOpen || !this.isMobile || window.innerWidth > 768;

  }

  logged: any; // Variable que puede almacenar información sobre el estado de inicio de sesión (no inicializada)

  

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
              let c = this.client.find(c => c.uuid == venta.uuid_cliente)
              console.log(c)
              venta.cliente = c.nombre;
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

   
  }

  
}
function checkScreenSize() {
  throw new Error('Function not implemented.');
}

