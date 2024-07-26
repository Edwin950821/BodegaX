import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormDialog } from '../../../shared/util/user-form/user-form-message';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

  constructor(private dialog:MatDialog) { }


  form(): import("@angular/forms").FormGroup<any> {
    throw new Error('Method not implemented.');
  }

  guardar() {

  }

  crear() {
    this.dialog.open(UserFormDialog)
  }


}
