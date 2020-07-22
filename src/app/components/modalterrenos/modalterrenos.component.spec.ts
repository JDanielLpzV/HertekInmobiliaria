import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalterrenosComponent } from './modalterrenos.component';

describe('ModalterrenosComponent', () => {
  let component: ModalterrenosComponent;
  let fixture: ComponentFixture<ModalterrenosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalterrenosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalterrenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
