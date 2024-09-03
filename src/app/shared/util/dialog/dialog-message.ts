import { Component, Inject } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../../../material.module";


export type orietations = "p" | "portrait" | "l" | "landscape"
@Component({
  selector: 'MessageDialog',
  templateUrl: 'dialog-message.html',
  styleUrls: ['./dialog-message.css'],
  standalone: true,
  imports: [MaterialModule, CommonModule]
})
export class MessageDialog {
  title = ''
  color = 'pink'
  bColor = ''
  mini = false
  class = ''

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {
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

}


