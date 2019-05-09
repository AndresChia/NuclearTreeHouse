import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarProyectoComponent } from './iniciar-proyecto.component';

describe('IniciarProyectoComponent', () => {
  let component: IniciarProyectoComponent;
  let fixture: ComponentFixture<IniciarProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciarProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
