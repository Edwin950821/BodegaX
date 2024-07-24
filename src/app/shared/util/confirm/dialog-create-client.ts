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
 
  
  
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {
   
    
    if(data.size){
      
    }else{
      
    }
    
  }

}


