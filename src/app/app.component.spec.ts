import { TestBed } from '@angular/core/testing';//importar el TestBed
import { RouterTestingModule } from '@angular/router/testing'; //importar el RouterTestingModule
import { AppComponent } from './app.component'; //importar el AppComponent

describe('AppComponent', () => { //describe es una función que recibe dos parámetros, el primero es una cadena de texto que describe el grupo de pruebas y el segundo es una función que contiene las pruebas
  beforeEach(async () => {//beforeEach es una función que se ejecuta antes de cada prueba
    await TestBed.configureTestingModule({//TestBed es una clase que proporciona métodos para configurar un módulo de Angular para las pruebas
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();//compileComponents es un método que compila los componentes del módulo de Angular
  });

  it('should create the app', () => {//it es una función que recibe dos parámetros, el primero es una cadena de texto que describe la prueba y el segundo es una función que contiene la prueba
    const fixture = TestBed.createComponent(AppComponent);//TestBed.createComponent es un método que crea un componente de Angular
    const app = fixture.componentInstance; //fixture.componentInstance es una propiedad que contiene la instancia del componente
    expect(app).toBeTruthy();//expect es una función que recibe un valor y devuelve un objeto que contiene métodos para realizar afirmaciones
  });//expect es una función que recibe un valor y devuelve un objeto que contiene métodos para realizar afirmaciones

  it(`should have as title 'BodegaX-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);//TestBed.createComponent es un método que crea un componente de Angular
    const app = fixture.componentInstance; //fixture.componentInstance es una propiedad que contiene la instancia del componente
    expect(app.title).toEqual('BodegaX-angular'); //expect es una función que recibe un valor y devuelve un objeto que contiene métodos para realizar afirmaciones
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent); //TestBed.createComponent es un método que crea un componente de Angular
    fixture.detectChanges(); //fixture.detectChanges es un método que detecta los cambios en el componente
    const compiled = fixture.nativeElement as HTMLElement; //fixture.nativeElement es una propiedad que contiene el elemento DOM del componente
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, BodegaX-angular'); //expect es una función que recibe un valor y devuelve un objeto que contiene métodos para realizar afirmaciones
  });
});
