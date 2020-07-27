import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldepartamentosComponent } from './modaldepartamentos.component';

describe('ModaldepartamentosComponent', () => {
  let component: ModaldepartamentosComponent;
  let fixture: ComponentFixture<ModaldepartamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaldepartamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaldepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
