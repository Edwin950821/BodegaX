import { ComponentFixture, TestBed } from '@angular/core/testing'; // Importa las herramientas necesarias para las pruebas de componentes en Angular.

import { SettingsComponent } from './settings.component'; // Importa el componente SettingsComponent que se va a probar.

describe('SettingsComponent', () => { // Define un bloque de pruebas para el SettingsComponent.
  let component: SettingsComponent; // Declara una variable para almacenar la instancia del componente.
  let fixture: ComponentFixture<SettingsComponent>; // Declara una variable para el componente de prueba.

  beforeEach(async () => { // Configura el entorno de prueba antes de cada prueba.
    await TestBed.configureTestingModule({ // Configura el módulo de prueba.
      declarations: [SettingsComponent] // Declara el componente que se va a probar.
    })
      .compileComponents(); // Compila los componentes declarados.

    fixture = TestBed.createComponent(SettingsComponent); // Crea una instancia del componente a probar.
    component = fixture.componentInstance; // Obtiene la instancia del componente.
    fixture.detectChanges(); // Realiza la detección de cambios para inicializar el componente.
  });

  it('should create', () => { // Define una prueba que verifica si el componente se crea correctamente.
    expect(component).toBeTruthy(); // Comprueba que la instancia del componente no sea nula o indefinida.
  });
});
