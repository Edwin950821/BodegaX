import {MatSidenavModule} from "@angular/material/sidenav"
import {MatButtonModule} from "@angular/material/button"
import {MatMenuModule} from "@angular/material/menu"
import {MatIconModule} from "@angular/material/icon"
import {MatCardModule} from "@angular/material/card"
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatInputModule} from "@angular/material/input"
import {MatSelectModule} from "@angular/material/select"
import {MatDialogModule} from "@angular/material/dialog"
import {MatCheckboxModule} from "@angular/material/checkbox"
import {MatDividerModule} from "@angular/material/divider"
import { NgModule } from "@angular/core"

const modules = [MatSidenavModule, MatButtonModule, MatMenuModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDialogModule, MatCheckboxModule,MatDividerModule]

@NgModule({
    imports: [...modules], exports: [... modules]
})
export class MaterialModule{

}