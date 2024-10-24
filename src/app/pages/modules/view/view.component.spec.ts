import { ComponentFixture, TestBed } from '@angular/core/testing';
// Importa ComponentFixture y TestBed de Angular para configurar y ejecutar pruebas unitarias.

import { ViewComponent } from './view.component';
// Importa el componente ViewComponent desde su ruta relativa.

describe('ViewComponent', () => {
  // Describe un bloque de pruebas para el componente ViewComponent.

  let component: ViewComponent;
  // Declara una variable para almacenar una instancia del componente.

  let fixture: ComponentFixture<ViewComponent>;
  // Declara una variable para almacenar la referencia al fixture del componente.

  beforeEach(async () => {
    // Define una función que se ejecuta antes de cada prueba.
    await TestBed.configureTestingModule({
      declarations: [ViewComponent]
      // Configura el módulo de pruebas declarando el componente ViewComponent.
    })
    .compileComponents();
    // Compila los componentes declarados.

    fixture = TestBed.createComponent(ViewComponent);
    // Crea una instancia del fixture para ViewComponent.

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
