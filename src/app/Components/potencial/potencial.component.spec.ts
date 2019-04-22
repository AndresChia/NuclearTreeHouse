import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotencialComponent } from './potencial.component';

describe('PotencialComponent', () => {
  let component: PotencialComponent;
  let fixture: ComponentFixture<PotencialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotencialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
