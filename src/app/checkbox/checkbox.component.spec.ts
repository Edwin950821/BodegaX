import { ComponentFixture, TestBed } from '@angular/core/testing';//Importacion de modulo requerido para realizar pruebas

import { CheckboxComponent } from './checkbox.component';//Importacion de modulo a probar

describe('CheckboxComponent', () => {//Inicio de la prueba unitaria
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async () => {//Inicio de la prueba unitaria
    await TestBed.configureTestingModule({
      declarations: [CheckboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
