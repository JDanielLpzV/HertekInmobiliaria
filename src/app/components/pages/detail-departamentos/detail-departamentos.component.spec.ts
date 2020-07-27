import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDepartamentosComponent } from './detail-departamentos.component';

describe('DetailDepartamentosComponent', () => {
  let component: DetailDepartamentosComponent;
  let fixture: ComponentFixture<DetailDepartamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDepartamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
