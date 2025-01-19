// Importaciones necesarias
import { HttpClient } from '@angular/common/http'; // Se importa HttpClient para realizar solicitudes HTTP.
import { Component, OnInit } from '@angular/core'; // Se importan los decoradores Component y la interfaz OnInit.
import { AppService } from '../../../app.service'; // Se importa el servicio AppService para manejar la lógica de la aplicación.
import { TerminarJornada } from '../../../shared/util/terminar/terminar-jornada'; // Se importa el componente TerminarJornada para finalizar la jornada.

@Component({
  selector: 'app-history', // Nombre del selector para este componente.
  templateUrl: './history.component.html', // Ruta del archivo HTML del componente.
  styleUrl: './history.component.css' // Ruta del archivo CSS del componente.
})
export class HistoryComponent implements OnInit {



  sidebarOpen: boolean = true;// Inicializa 'sidebarOpen' en 'true', indicando que el sidebar está abierto de forma predeterminada. Se utilizará para alternar la visibilidad del sidebar.
  isMobile: boolean = window.innerWidth <= 768; // Inicializa 'isMobile' en función del ancho actual de la pantalla. Si el ancho es menor o igual a 768px, se considera una pantalla móvil (true); de lo contrario, será false.
  //
  user2 = JSON.parse(sessionStorage.getItem("bodegax") || "{'role': ''}"); // Variable para almacenar los datos del usuario actual.
  dialog: any; // Variable para almacenar el servicio MatDialog.

  openSidebar() {// Método para alternar la visibilidad del sidebar.
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
  constructor(private http: HttpClient, private appSvc: AppService) {

    appSvc.role$.subscribe(r => {
      this.role = r;
    })// Suscribe al observable 'role$' para recibir el rol del usuario actual.



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

            if (this.user2.role == 'user') { // Verifica si el rol del usuario actual (this.user2.role) es 'user'.
              this.history = this.history.filter(h => h.uuid_cliente === this.user2.uuid)// Filtra el historial de ventas para mostrar solo las ventas del usuario actual.
            }

            // Recorre cada venta para asociar el nombre del cliente.
            this.history.forEach((venta: any) => {
              // Busca en el array 'client' el cliente que coincida con 'uuid_cliente' de la venta.
              let c = this.client.find(c => c.uuid == venta.uuid_cliente)
              venta.cliente = c.nombre; // Asigna el nombre del cliente a la propiedad 'cliente' de la venta.
            });

            // Se realiza una solicitud GET al endpoint
            this.http.get("http://localhost:8080/productos/all").subscribe(
              (res5: any) => {
                this.productos = res5 //La respuesta (res5) contiene todos los productos y se asigna a la propiedad this.productos.

                this.http.get("http://localhost:8080/producto-ventas/all").subscribe(
                  (res4: any) => {
                    this.productoventas = res4 //Una vez que se obtiene la respuesta de la primera solicitud de mostrar en pantalla tods los productos-venta, se hace otra solicitud GET al endpoint

                    this.productoventas.forEach((pr: any) => {
                      // Busca en el array 'productos' el producto que coincida con 'uuid_producto' de la venta.
                      pr.producto = this.productos.find(c => c.uuid == pr.uuid_producto).nombre;
                    });

                    this.history.forEach((venta: any) => {
                      // Para cada elemento en el arreglo 'this.history', representado por 'venta':

                      // Se asigna a la propiedad 'detalle' de 'venta' el resultado del filtro en 'this.productoventas'.

                      venta.detalle = this.productoventas.filter(c => c.uuid_venta == venta.uuid) // Se asigna a la propiedad 'detalle' de 'venta' el resultado del filtro en 'this.productoventas'.
                      // La función 'filter' devuelve un nuevo arreglo que contiene todos los elementos de 'this.productoventas'
                      // donde el atributo 'uuid_venta' coincide con el atributo 'uuid' de la venta actual.
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

  terminar() {

    this.dialog.open(TerminarJornada, {// Llama al método 'open' del servicio 'MatDialog' para abrir un cuadro de diálogo.
      data: {// Configura los datos que se pasan al componente del diálogo.
        title: '', // Título del cuadro de diálogo (actualmente vacío).
        clientes: this.client // Lista de clientes que se pasa al componente del diálogo.
      },


    });


  }


}


function checkScreenSize() {// Función que verifica el tamaño de la pantalla.
  throw new Error('Function not implemented.');
}

