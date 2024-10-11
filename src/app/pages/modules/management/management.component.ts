import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { MatDialog } from '@angular/material/dialog';
import { SolicitarCaja } from '../../../shared/util/solicitar-caja/solicitar-caja';
import { RecibirCaja } from '../../../shared/util/dialog/recibir-caja/recibir-caja';


@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrl: './management.component.css'
})




export class ManagementComponent {
  [x: string]: any;
  stock: any;
  nombre: any;
  productos: any;
  bodega: any;
  total = 0;


  constructor(private http: HttpClient, private appSvc: AppService, private dialog: MatDialog) { }


  ngOnInit(): void {
    // 1. Obtener todos los productos
    this.http.get("http://localhost:8080/productos/all").subscribe(
      (res3: any) => {
        this.productos = res3; // Almacena los productos
        console.log('Productos:', this.productos);
        this.productos.forEach((p: any) => {
          this.total = this.total + p.stock
        })


      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }

  terminar() {

  }

  detalles() {

  }

  openSidebar() {
    this.appSvc.toggleSidebar()
  }

  recibirCaja() {
    var r = this.dialog.open(RecibirCaja, {
      data: {
        title: 'Hola',
        productos: this.productos

      }
    })
    r.afterClosed().subscribe(rx=>{
      if(rx && rx!= false){
        this.productos.find((p: any)=> p.uuid == rx.uuid).stock = rx.stock
        this.total = 0
        this.productos.forEach((p: any) => {
          this.total = this.total + p.stock
        })
      }
    })


  }






}








