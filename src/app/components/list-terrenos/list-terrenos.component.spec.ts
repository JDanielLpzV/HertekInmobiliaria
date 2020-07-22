import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTerrenosComponent } from './list-terrenos.component';

describe('ListTerrenosComponent', () => {
  let component: ListTerrenosComponent;
  let fixture: ComponentFixture<ListTerrenosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTerrenosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTerrenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
