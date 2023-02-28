import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarreservaComponent } from './verificarreserva.component';

describe('VerificarreservaComponent', () => {
  let component: VerificarreservaComponent;
  let fixture: ComponentFixture<VerificarreservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarreservaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificarreservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
