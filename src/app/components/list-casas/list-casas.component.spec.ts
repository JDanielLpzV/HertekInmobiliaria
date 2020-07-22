import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCasasComponent } from './list-casas.component';

describe('ListCasasComponent', () => {
  let component: ListCasasComponent;
  let fixture: ComponentFixture<ListCasasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCasasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
