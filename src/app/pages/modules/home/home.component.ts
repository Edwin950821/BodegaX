import { Component } from '@angular/core'; // Importa Component e Inject de Angular.
import { AppService } from '../../../app.service'; // Importa AppService de su ruta relativa.
import { MatDialog, } from '@angular/material/dialog'; // Importa MatDialog de Angular Material.
import { DespacharCaja } from '../../../shared/util/despachar-caja/despachar-caja'; // Importa el componente DespacharCaja.
import { HttpClient } from '@angular/common/http'; // Importa HttpClient de Angular para hacer solicitudes HTTP.
import { FormBuilder } from '@angular/forms'; // Importa FormBuilder de Angular para crear formularios.
import { TerminarJornada } from '../../../shared/util/terminar/terminar-jornada'; // Importa el componente TerminarJornada.
import { SolicitarCaja } from '../../../shared/util/solicitar-caja/solicitar-caja'; // Importa el componente SolicitarCaja.



// Importación de un módulo personalizado de Angular Material

// Importación de un componente para mostrar mensajes a los usuarios

@Component({
  selector: '/app-home', // Define el selector para el componente.
  templateUrl: './home.component.html', // Ruta al archivo HTML de la plantilla.
  styleUrl: './home.component.css', // Ruta al archivo CSS de los estilos.

})
export class HomeComponent {

 
  sidebarOpen: boolean = true; // Inicializa 'sidebarOpen' en 'true', indicando que el sidebar está abierto de forma predeterminada. Se utilizará para alternar la visibilidad del sidebar.
  isMobile: boolean = window.innerWidth <= 768; // Inicializa 'isMobile' en función del ancho actual de la pantalla. Si el ancho es menor o igual a 768px, se considera una pantalla móvil (true); de lo contrario, será false.

  role: 'admin' | 'user' = 'admin'; // Cambia el rol según corresponda
  productos: any[] = []; // Propiedad para almacenar la lista de productos, inicializada como array vacío.
  clientes: any[] = []; // Propiedad para almacenar la lista de clientes, inicializada como array vacío.
  uuid_venta: any; // Propiedad para almacenar UUID de la venta.
  productos_venta: any; // Propiedad para almacenar productos de la venta.
  ventas: any; // Propiedad para almacenar las ventas.
  open: any;


  user = JSON.parse(sessionStorage.getItem("bodegax") || "{'role': ''}"); // Obtiene el usuario almacenado en sessionStorage o un objeto vacío si no hay usuario.
click: any; // Propiedad para almacenar el evento click.

  constructor(private appSvc: AppService, private dialog: MatDialog, private http: HttpClient, private fb: FormBuilder) {// Inyecta AppService, MatDialog, HttpClient y FormBuilder.

    // Detecta cambios en el tamaño de la pantalla
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 768;

      checkScreenSize(); {
        this.isMobile = window.innerWidth <= 768;
      }

    });

  }
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
    console.log(`${this.role === 'admin' ? 'El admin' : 'El usuario'} está realizando una acción con las cajas.`);
    var clients = this.clientes // Filtra los clientes según el rol del usuario.
    if(this.user.role === 'user'){
      clients = this.clientes.filter(i=> i.uuid === this.user.uuid)// Filtra los clientes según el UUID del usuario.
    }
    this.dialog.open(DespacharCaja, {// Abre el diálogo de despachar caja.
      data: {
        title: '',
        clientes: clients,
        productos: this.productos
      }

     
    });

    
  }

  terminar() {// Método placeholder para finalizar alguna acción.

    var clients = this.clientes

    this.dialog.open(TerminarJornada, {
      data: {
        title: '',
        clientes: clients
      },


    });

  }
  



  openSidebar() {
    // Método para abrir la barra lateral utilizando AppService.
    this.appSvc.toggleSidebar();
    this.sidebarOpen = !this.sidebarOpen;

  }

  get shouldShowUserName(): boolean {
    return !this.sidebarOpen || !this.isMobile || window.innerWidth > 768;
  }

  

  icon() { }
  // Método placeholder, posiblemente para manejar iconos en el futuro.

  get buttonRole(): string {
    return this.user.role === 'user' ? 'Solicitar Caja' : 'Despachar Caja';
}
}

function checkScreenSize() {// Función para verificar el tamaño de la pantalla.
  throw new Error('Function not implemented.');
}

