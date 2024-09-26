import { MatSidenavModule } from "@angular/material/sidenav";
// Importación del módulo MatSidenav para utilizar componentes de barra lateral (sidenav)

import { MatButtonModule } from "@angular/material/button";
// Importación del módulo MatButton para utilizar botones de Material Design

import { MatMenuModule } from "@angular/material/menu";
// Importación del módulo MatMenu para utilizar menús contextuales de Material Design

import { MatIconModule } from "@angular/material/icon";
// Importación del módulo MatIcon para utilizar íconos de Material Design

import { MatCardModule } from "@angular/material/card";
// Importación del módulo MatCard para utilizar tarjetas de Material Design

import { MatFormFieldModule } from "@angular/material/form-field";
// Importación del módulo MatFormField para utilizar campos de formulario personalizados

import { MatInputModule } from "@angular/material/input";
// Importación del módulo MatInput para utilizar campos de entrada de texto

import { MatSelectModule } from "@angular/material/select";
// Importación del módulo MatSelect para utilizar selectores de Material Design

import { MatDialogModule } from "@angular/material/dialog";
// Importación del módulo MatDialog para utilizar cuadros de diálogo (modales)

import { MatCheckboxModule } from "@angular/material/checkbox";
// Importación del módulo MatCheckbox para utilizar casillas de verificación de Material Design

import { MatDividerModule } from "@angular/material/divider";
// Importación del módulo MatDivider para utilizar divisores (líneas separadoras) en el diseño

import { NgModule } from "@angular/core";
// Importación del decorador NgModule que se utiliza para definir un módulo Angular

const modules = [
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,
    MatDividerModule
    // Array que agrupa todos los módulos de Angular Material que se importarán y exportarán
];

@NgModule({
    imports: [...modules], // Importación de todos los módulos de Angular Material
    exports: [...modules]  // Exportación de todos los módulos para que puedan ser utilizados en otros módulos
})
export class MaterialModule {
    // Este módulo permite centralizar la importación y exportación de componentes de Angular Material
}
