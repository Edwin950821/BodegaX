import { ComponentFixture, TestBed } from '@angular/core/testing';
// Importa ComponentFixture y TestBed de Angular para configurar y ejecutar pruebas unitarias.

import { HsaleComponent } from './hsale.component';
// Importa el componente HsaleComponent desde su ruta relativa.

describe('HsaleComponent', () => {
  // Describe un bloque de pruebas para el componente HsaleComponent.

  let component: HsaleComponent;
  // Declara una variable para almacenar una instancia del componente.

  let fixture: ComponentFixture<HsaleComponent>;
  // Declara una variable para almacenar la referencia al fixture del componente.

  beforeEach(async () => {
    // Define una función que se ejecuta antes de cada prueba.
    await TestBed.configureTestingModule({
      declarations: [HsaleComponent]
      // Configura el módulo de pruebas declarando el componente HsaleComponent.
    })
    .compileComponents();
    // Compila los componentes declarados.

    fixture = TestBed.createComponent(HsaleComponent);
    // Crea una instancia del fixture para HsaleComponent.

    component = fixture.componentInstance;
    // Asigna la instancia del componente a la variable component.

    fixture.detectChanges();
    // Detecta los cambios y actualiza el fixture.
  });

  it('should create', () => {
    // Define una prueba que verifica si el componente se crea correctamente.
    expect(component).toBeTruthy();
    // Verifica que la instancia del componente es verdadera (existe).
  });
});
