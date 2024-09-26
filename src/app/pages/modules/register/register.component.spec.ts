// Importaciones necesarias para realizar pruebas en Angular.
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';

// Describe el conjunto de pruebas para el componente RegisterComponent.
describe('RegisterComponent', () => {
  // Declara variables para el componente y su fixture.
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  // Configura el entorno de prueba antes de cada prueba.
  beforeEach(async () => {
    // Configura un módulo de prueba y declara el componente que se va a probar.
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent] // Declara el RegisterComponent.
    })
    .compileComponents(); // Compila los componentes declarados.

    // Crea una instancia del componente para las pruebas.
    fixture = TestBed.createComponent(RegisterComponent);
    // Asigna la instancia del componente a la variable.
    component = fixture.componentInstance;
    // Ejecuta la detección de cambios para inicializar el componente.
    fixture.detectChanges();
  });

  // Define una prueba específica para verificar que el componente se crea correctamente.
  it('should create', () => {
    // Comprueba que la instancia del componente no sea null o undefined.
    expect(component).toBeTruthy(); // Verifica que el componente se haya creado exitosamente.
  });
});
