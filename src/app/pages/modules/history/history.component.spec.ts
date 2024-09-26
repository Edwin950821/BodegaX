// Importaciones necesarias para realizar pruebas en Angular
import { ComponentFixture, TestBed } from '@angular/core/testing'; // 'TestBed' configura el entorno de pruebas y 'ComponentFixture' facilita la interacción con el componente.

import { HistoryComponent } from './history.component'; // Se importa el componente 'HistoryComponent' que será probado.

describe('HistoryComponent', () => { // Define un bloque de pruebas para el componente 'HistoryComponent'.

  let component: HistoryComponent; // Variable para almacenar la instancia del componente que se va a probar.
  let fixture: ComponentFixture<HistoryComponent>; // 'fixture' facilita el acceso y la manipulación del componente en el entorno de pruebas.

  // beforeEach se ejecuta antes de cada prueba individual en el bloque 'describe'
  beforeEach(async () => {
    // Se configura el entorno de pruebas usando TestBed
    await TestBed.configureTestingModule({
      declarations: [HistoryComponent] // Se declara el componente que estamos probando
    })
      .compileComponents(); // Compila los componentes declarados, necesarios para que funcionen las pruebas.

    // Se crea una instancia del componente 'HistoryComponent'
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance; // Se obtiene la instancia del componente desde el fixture.
    fixture.detectChanges(); // Ejecuta la detección de cambios para actualizar el estado del componente.
  });

  // Prueba básica para verificar que el componente se crea correctamente
  it('should create', () => {
    // Se espera que la instancia del componente sea 'verdadera', es decir, que el componente se haya creado exitosamente.
    expect(component).toBeTruthy();
  });
});
