import { TestBed } from '@angular/core/testing';
// Importación de TestBed para configurar un entorno de prueba para componentes y servicios Angular

import { AppService } from './app.service';
// Importación del servicio AppService que se va a probar

describe('AppService', () => {
  // Inicio de la descripción del conjunto de pruebas para AppService
  let service: AppService; // Declaración de la variable que almacenará la instancia del servicio

  beforeEach(() => {
    // Esta función se ejecuta antes de cada prueba individual
    TestBed.configureTestingModule({});
    // Configuración del módulo de prueba. No se especifican proveedores ni declaraciones adicionales aquí.
    service = TestBed.inject(AppService);
    // Inyección del servicio AppService para su uso en las pruebas
  });

  it('should be created', () => {
    // Definición de una prueba individual
    expect(service).toBeTruthy();
    // Verifica que la instancia del servicio sea creada correctamente (no sea null ni undefined)
  });
});
