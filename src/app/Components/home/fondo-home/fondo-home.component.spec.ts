import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoHomeComponent } from './fondo-home.component';

describe('FondoHomeComponent', () => {
  let component: FondoHomeComponent;
  let fixture: ComponentFixture<FondoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
