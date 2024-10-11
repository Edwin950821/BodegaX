import { Component, Inject } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { CommonModule } from "@angular/common";
import { ModalService } from "../pages/modules/home/home.component";


export type orietations = "p" | "portrait" | "l" | "landscape"
@Component({
  selector: 'ModalDialog',
  templateUrl: 'modal.html',
  styleUrls: ['./modal.css'],
  standalone: true,
  imports: [CommonModule],
  providers: [ModalService]
})
export class ConfirmDialog {
  title = ''
  color = 'pink'
  bColor = ''
  mini = false
  class = ''

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private mydialog:MatDialogRef<ConfirmDialog>) {
    this.title = data.title
    this.color = data.color
    this.class += data.color
    this.bColor = 'b'+data.color
    if(data.size){
      this.class += ' dialog-mini'
    }else{
      this.class += ' dialog'
    }
    
  }

  cancel(){
    this.mydialog.close(false)
  }

  confirm(){
    this.mydialog.close(true)
  }

}

