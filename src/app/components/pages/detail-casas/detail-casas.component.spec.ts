import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCasasComponent } from './detail-casas.component';

describe('DetailCasasComponent', () => {
  let component: DetailCasasComponent;
  let fixture: ComponentFixture<DetailCasasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCasasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
