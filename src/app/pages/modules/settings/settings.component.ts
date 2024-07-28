import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormDialog } from '../../../shared/util/user-form/user-form-message';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit{

  usuarios: any[] = []

  constructor(private dialog:MatDialog,private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/admin/all").subscribe((res:any) =>{
      this.usuarios= res
      this.usuarios= this.usuarios.filter(u=>u.role=="user")
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


}
