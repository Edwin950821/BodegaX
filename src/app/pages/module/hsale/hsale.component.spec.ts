import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsaleComponent } from './hsale.component';

describe('HsaleComponent', () => {
  let component: HsaleComponent;
  let fixture: ComponentFixture<HsaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HsaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
