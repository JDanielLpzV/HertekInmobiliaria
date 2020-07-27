import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaledificiosComponent } from './modaledificios.component';

describe('ModaledificiosComponent', () => {
  let component: ModaledificiosComponent;
  let fixture: ComponentFixture<ModaledificiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaledificiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaledificiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
