import { Component, Inject } from "@angular/core";
// Importa el decorador Component y la función Inject de Angular.

import { FormBuilder } from "@angular/forms";
// Importa FormBuilder de Angular Forms para construir formularios reactivos.

import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
// Importa varias utilidades de Angular Material Dialog:
// MAT_DIALOG_DATA: Para inyectar datos en un diálogo.
// MatDialog: Servicio para abrir diálogos.
// MatDialogModule: Módulo para manejar diálogos de Angular Material.
// MatDialogRef: Referencia a un diálogo abierto para interactuar con él.

import { CommonModule } from "@angular/common";
// Importa CommonModule que incluye directivas comunes de Angular como ngIf y ngFor.

import { MatToolbarModule } from '@angular/material/toolbar';
// Importa MatToolbarModule para usar la barra de herramientas de Angular Material.

import { MatDialogContent } from '@angular/material/dialog';
// Importa MatDialogContent para manejar el contenido dentro de los diálogos de Angular Material.

import { HttpClient, HttpClientModule } from "@angular/common/http";
// Importa HttpClient para hacer solicitudes HTTP y HttpClientModule para configurar HttpClient en Angular.

import { NgModule } from '@angular/core';
// Importa NgModule que permite definir un módulo en Angular.

import { MatFormFieldModule } from '@angular/material/form-field';
// Importa MatFormFieldModule para utilizar campos de formulario de Angular Material.

import { FormsModule } from '@angular/forms';
// Importa FormsModule para trabajar con formularios template-driven.

import { MatSelectModule } from '@angular/material/select';
// Importa MatSelectModule para utilizar selectores de Angular Material.

import { MaterialModule } from "../../../../../src/app/material.module";
// Importa un módulo personalizado MaterialModule desde una ruta relativa.

import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'



// Definición de un tipo para las orientaciones, puede ser "p", "portrait", "l" o "landscape"
export type orietations = "p" | "portrait" | "l" | "landscape";

@Component({
  selector: 'TerminarJornada', // Selector del componente, se puede usar en HTML como <recibirCaja></recibirCaja>
  templateUrl: 'terminar-jornada.html', // Ruta al archivo de plantilla HTML del componente
  styleUrls: ['./terminar-jornada.css'], // Rutas a los archivos de estilos CSS del componente
  standalone: true, // Indica que el componente es independiente y no necesita un módulo Angular
  imports: [MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MaterialModule,
    CommonModule,
    HttpClientModule

  ] // Importa módulos necesarios para el componente


})

export class TerminarJornada {
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

  myUser = JSON.parse(sessionStorage.getItem("bodegax") || "{'uuid': ''}");

  client: any[] = []
  history: any[] = []
  productoventas: any[] = []

  // Constructor del componente
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, // Inyecta los datos que se pasaron al abrir el diálogo
    private fb: FormBuilder, // FormBuilder para la creación de formularios reactivos
    private mydialog: MatDialogRef<TerminarJornada>, // Referencia al diálogo, se usa para cerrarlo desde el código
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

                    this.history.forEach((venta: any) => {
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

  // Método que se llama al hacer clic en el botón de cancelar
  cancel() {
    this.mydialog.close(false); // Cierra el diálogo y devuelve 'false' para indicar que la acción fue cancelada
  }


  confirmar() { // Método que se llama al hacer clic en el botón de confirmar

    if (this.clienteSelected == '') {// Verificamos si no se ha seleccionado ningún cliente
      window.alert('Debe escoger cliente') // Si el cliente no está seleccionado, mostramos una alerta al usuario
      return  // Si la condición no se cumple (es decir, sí hay un cliente seleccionado),
      // el flujo de la función continuará normalmente
    }

    const doc = new jsPDF(); // Creación de un nuevo documento PDF utilizando jsPDF



    var w = doc.internal.pageSize.width || doc.internal.pageSize.getWidth(); // Obtención del ancho de la página del documento PDF
    // Se verifica si la propiedad 'width' está disponible, de lo contrario se llama al método 'getWidth'

    const user = this.myUser // Se asigna el objeto 'myUser' a una variable local para facilitar el acceso

    if (!user) {
      console.error('El usuario no encontrado.');
      return;
    } // Informacion de usario
    
      // Información del cliente
  const client = this.clientes.find((c) => c.uuid === this.clienteSelected);
  if (!client) {
    console.error('El cliente seleccionado no fue encontrado.');
    return;
  }

    doc.text(user.nombre, w / 2, 10, { align: 'center' }); // Agrega texto al documento PDF, centrado en la posición horizontal (w/2) y con una alineación especificada
    doc.text(user.id, w / 2, 20, { align: 'center' }); // Este texto corresponde a información del usuario: nombre, ID y dirección
    doc.text(user.direccion, w / 2, 30, { align: 'center' });

    

    let cliente = this.clientes.find(c => c.uuid == this.clienteSelected) // Busca un cliente específico en la lista de clientes, utilizando el identificador seleccionado (clienteSelected)


    doc.text(`cliente: ${client.nombre}`, 20, 40); // Agrega al PDF información del cliente seleccionado
    doc.text(`ID Cliente: ${client.uuid}`, 20, 50);

    // Filtrar ventas del cliente
  const venta = this.history.filter((v) => v.uuid_cliente === this.clienteSelected);
  if (venta.length === 0) {
    console.warn('No hay ventas asociadas al cliente seleccionado.');
    doc.text('No hay ventas registradas para este cliente.', 20, 60);
    doc.save('Jornada.pdf');
    return;
  }

  

    let ventas = this.history.filter(v => v.uuid_cliente == this.clienteSelected) // Filtra las ventas históricas para obtener solo aquellas asociadas al cliente seleccionado

    let rows: any[] = [] // Inicializa un arreglo vacío para almacenar las filas que serán agregadas al PDF
    let myMap = new Map(); // Inicializa un mapa para consolidar los productos vendidos
    ventas.forEach(v => {  // Recorre las ventas asociadas al cliente seleccionado
      v.detalle.forEach((d: any) => {   // Itera sobre los detalles de cada venta

        if (myMap.has(d.producto)) {  // Si el producto ya existe en el mapa, actualiza su cantidad total y el total parcial
          let found = myMap.get(d.producto)
          found['cantidad'] = found['cantidad'] + d.cantidad
          found['total'] = found['total'] + d.total_parcial
        } else {
          myMap.set(d.producto, {   // Si el producto no está en el mapa, lo agrega con sus valores iniciales
            cantidad: d.cantidad,
            total: d.total_parcial
          });
        }  // Define la cabecera ('Producto', 'cantidad', 'total') y las filas generadas
      })
    })

    myMap.forEach((value, key) => {
      rows.push([key, value.cantidad, value.total])
    }); // Convierte el mapa en un arreglo de filas para usar en la tabla del PDF

    autoTable(doc, {
      head: [['Producto', 'cantidad', 'total']],
      body: rows,
      margin: { top: 50 },  // Define el margen superior del encabezado 
    })

    doc.save("Jornada.pdf"); // Guarda el PDF generado con el nombre "Jornada.pdf"



  }
}


