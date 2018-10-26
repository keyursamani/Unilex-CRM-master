import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOver7daysComponent } from './order-over7days.component';

describe('OrderOver7daysComponent', () => {
  let component: OrderOver7daysComponent;
  let fixture: ComponentFixture<OrderOver7daysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderOver7daysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderOver7daysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
