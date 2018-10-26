import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalOrderValueComponent } from './total-order-value.component';

describe('TotalOrderValueComponent', () => {
  let component: TotalOrderValueComponent;
  let fixture: ComponentFixture<TotalOrderValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalOrderValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalOrderValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
