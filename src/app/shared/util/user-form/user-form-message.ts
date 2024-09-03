import { Component, Inject } from "@angular/core";
import { FormBuilder, FormsModule } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../../../material.module";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Router } from "@angular/router";
import { AppService } from "../../../app.service";
import { MessageDialog } from "../dialog/dialog-message";


export type orietations = "p" | "portrait" | "l" | "landscape"
@Component({
  selector: 'MessageDialog',
  templateUrl: 'user-form-message.html',
  styleUrls: ['./user-form-message.css'],
  standalone: true,
  imports: [MaterialModule, CommonModule, FormsModule, HttpClientModule]
})
export class UserFormDialog {

  method = 'new'
  username = ''
  address = ''
  password = ''
  conpassword = ''
  id = ''
  uuid = ''

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,
    private dialog: MatDialog, private navegacion: Router, private http: HttpClient,
    private appSvc: AppService, private mydialog: MatDialogRef<UserFormDialog>) {

      if(data?.uuid){
        this.username = data.username
        this.address = data.address
        this.password = data.password
        this.conpassword = data.password
        this.id = data.id
      }

  }

  //funciones 

  register() {
    if (this.username == '' || this.password == '' || this.conpassword == '' || this.id == '') {

      this.dialog.open(MessageDialog, {
        data: {
          title: "Por Favor Rellenar Todos Los Campos"
        }
      })
      return
    }

    if (this.password != this.conpassword) {
      this.dialog.open(MessageDialog, {
        data: {
          title: "La Contraseñas no coinciden"
        }
      })
      return
    }
    if (this.data.uuid) {
      this.http.put(
        "http://localhost:8080/admin/edit", {
        role: "user",
        nombre: this.username,
        id: this.id,
        password: this.password,
        direccion: this.address,
        uuid: this.data.uuid
      }
      ).subscribe(res => {
        if (res) {
          this.dialog.open(MessageDialog, {
            data: {
              title: "Cliente editado Con Exito"
            }
          })
  
          this.mydialog.close()
        }
      })
    }else{
      this.http.post(
        "http://localhost:8080/admin/create", {
        role: "user",
        nombre: this.username,
        id: this.id,
        password: this.password,
        direccion: this.address,
  
      }
      ).subscribe(res => {
        if (res) {
          this.dialog.open(MessageDialog, {
            data: {
              title: "Cliente Creado Con Exito"
            }
          })
  
          this.mydialog.close()
        }
      })
    }
    
  }

}


