// Importaciones necesarias para las pruebas unitarias
import { ComponentFixture, TestBed } from '@angular/core/testing'; // Importa funciones de Angular para pruebas de componentes
import { OrdersComponent } from './orders.component'; // Importa el componente a probar

// Describe un conjunto de pruebas para el componente OrdersComponent
describe('OrdersComponent', () => {
  let component: OrdersComponent; // Variable para almacenar la instancia del componente
  let fixture: ComponentFixture<OrdersComponent>; // Variable para el fixture de prueba del componente

  // Bloque que se ejecuta antes de cada prueba
  beforeEach(async () => {
    // Configura el módulo de prueba con las declaraciones necesarias
    await TestBed.configureTestingModule({
      declarations: [OrdersComponent] // Declara el componente que se está probando
    })
      .compileComponents(); // Compila los componentes declarados

    // Crea el fixture para el componente y la instancia del componente
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance; // Inicializa la instancia del componente
    fixture.detectChanges(); // Detecta cambios para actualizar el componente
  });

  // Prueba para verificar que el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy(); // Comprueba que la instancia del componente es verdadera (existe)
  });
});
