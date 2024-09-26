// Importaciones necesarias para la configuración de pruebas
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component'; // Importa el componente LoginComponent que se va a probar

// Describe un bloque de pruebas para el LoginComponent
describe('LoginComponent', () => {
  let component: LoginComponent; // Variable para el componente que se va a probar
  let fixture: ComponentFixture<LoginComponent>; // Variable para la instancia del componente de prueba

  // Antes de cada prueba, se ejecuta este bloque de configuración
  beforeEach(async () => {
    // Configura el módulo de prueba
    await TestBed.configureTestingModule({
      declarations: [LoginComponent] // Declara el componente que se va a probar
    })
      .compileComponents(); // Compila los componentes declarados

    // Crea una instancia del componente y la asocia a la variable 'fixture'
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance; // Asigna la instancia del componente a la variable 'component'
    fixture.detectChanges(); // Detecta cambios para inicializar el componente
  });

  // Define una prueba unitaria para verificar si el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que la instancia del componente no sea nula o indefinida
  });
});
