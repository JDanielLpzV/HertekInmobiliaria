import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTerrenosComponent } from './detail-terrenos.component';

describe('DetailTerrenosComponent', () => {
  let component: DetailTerrenosComponent;
  let fixture: ComponentFixture<DetailTerrenosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTerrenosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTerrenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
