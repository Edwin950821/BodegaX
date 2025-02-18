import { HttpClient } from '@angular/common/http';
// Importa el servicio HttpClient para hacer solicitudes HTTP.

import { Component, OnInit } from '@angular/core';
// Importa el decorador Component y la interfaz OnInit de Angular.

import { AppService } from '../../../app.service';
// Importa un servicio personalizado llamado AppService.

import { MatDialog } from '@angular/material/dialog';
// Importa el servicio MatDialog para diálogos de Angular Material.

import { SolicitarCaja } from '../../../shared/util/solicitar-caja/solicitar-caja';
// Importa un componente de diálogo personalizado para solicitar cajas.

import { RecibirCaja } from '../../../shared/util/dialog/recibir-caja/recibir-caja';
// Importa un componente de diálogo personalizado para recibir cajas.

@Component({
  selector: 'app-management',
  // Define el selector del componente.
  templateUrl: './management.component.html',
  // Define la ruta del archivo de plantilla HTML.
  styleUrls: ['./management.component.css']
  // Define la ruta del archivo de estilos CSS.
})
export class ManagementComponent implements OnInit {
  // Define la clase del componente e implementa la interfaz OnInit.

  sidebarOpen: boolean = true;  // Inicializa 'sidebarOpen' en 'true', indicando que el sidebar está abierto de forma predeterminada. Se utilizará para alternar la visibilidad del sidebar.
  isMobile: boolean = window.innerWidth <= 768;  // Inicializa 'isMobile' en función del ancho actual de la pantalla. Si el ancho es menor o igual a 768px, se considera una pantalla móvil (true); de lo contrario, será false.

  user3 = JSON.parse(sessionStorage.getItem("bodegax") || "{'role': ''}");
  //Metodo que se utiliza para traer el usuario se inicio de sesion en la parte superior derecha 

  [x: string]: any;
  // Permite el uso de propiedades indexadas.

  stock: any;
  // Propiedad para almacenar el stock de productos.

  nombre: any;
  // Propiedad para almacenar el nombre de los productos.

  productos: any;
  // Propiedad para almacenar la lista de productos.

  bodega: any;
  // Propiedad para almacenar información de la bodega.

  total = 0;
  // Propiedad para almacenar el total de productos, inicializada en 0.

  constructor(private http: HttpClient, private appSvc: AppService, private dialog: MatDialog) {

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

  ngOnInit(): void {
    // Método de ciclo de vida que se ejecuta al inicializar el componente.

    // 1. Obtener todos los productos
    this.http.get("http://localhost:8080/productos/all").subscribe(
      (res3: any) => {
        this.productos = res3;
        // Almacena los productos recibidos en la propiedad productos.
        console.log('Productos:', this.productos);
        // Imprime los productos en la consola para depuración.
        this.productos.forEach((p: any) => {
          this.total = this.total + p.stock;
          // Suma el stock de cada producto al total.
        });
      },
      (error) => {
        console.error('Error al obtener productos:', error);
        // Maneja errores al obtener los productos.
      }
    );
  }

  terminar() { }
  // Método placeholder para finalizar alguna acción.

  detalles() { }
  // Método placeholder para mostrar detalles.

  openSidebar() {
    this.appSvc.toggleSidebar();
    this.sidebarOpen = !this.sidebarOpen;

    // Método para abrir la barra lateral utilizando AppService.
  }

  recibirCaja() {
    var r = this.dialog.open(RecibirCaja, {
      data: {
        title: '',
        productos: this.productos
      }
    });
    // Abre un diálogo para recibir cajas con datos específicos.

    r.afterClosed().subscribe(rx => {
      if (rx && rx !== false) {
        this.productos.find((p: any) => p.uuid == rx.uuid).stock = rx.stock;
        this.total = 0;
        this.productos.forEach((p: any) => {
          this.total = this.total + p.stock;
          // Actualiza el stock total después de cerrar el diálogo.
        });
      }
    });
  }
}
function checkScreenSize() {
  throw new Error('Function not implemented.');
}

