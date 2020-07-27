import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEdificiosComponent } from './detail-edificios.component';

describe('DetailEdificiosComponent', () => {
  let component: DetailEdificiosComponent;
  let fixture: ComponentFixture<DetailEdificiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailEdificiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEdificiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
