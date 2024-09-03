import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormDialog } from '../../../shared/util/user-form/user-form-message';
import { HttpClient } from '@angular/common/http';
import { ConfirmDialog } from '../../../shared/util/confirm/confirm-message';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit{
  usuarios: any;
  
  constructor(private dialog:MatDialog,private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.http.get("http://localhost:8080/admin/all").subscribe((res:any) =>{
      this.usuarios= res
      this.usuarios= this.usuarios.filter((u: { role: string; })=>u.role=="user")
      console.log(this.usuarios)
    })
  }

  form(): import("@angular/forms").FormGroup<any> {
    throw new Error('Method not implemented.');
  }

  guardar() {

  }

  crear() {
    this.dialog.open(UserFormDialog)
  }

  editar(user: any){
    var res = this.dialog.open(UserFormDialog, {data: {
      username: user.nombre,
      id: user.id,
      password: user.password,
      address: user.direccion,
      uuid: user.uuid
    }})
    res.afterClosed().subscribe(r => {
      this.getUsers()
    })
  }

  eliminar(user: any){
    var res = this.dialog.open(ConfirmDialog, {data: {title: "Estas seguro que desea eliminar este registro?"}})
    res.afterClosed().subscribe(r => {
      if(r == true){
        this.http.delete("http://localhost:8080/admin/delete", {body: user}).subscribe((x:any) =>{
          this.getUsers()
        })
      }
    })
  }


}
