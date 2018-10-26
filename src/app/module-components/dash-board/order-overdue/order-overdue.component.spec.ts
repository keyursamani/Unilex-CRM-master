import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOverdueComponent } from './order-overdue.component';

describe('OrderOverdueComponent', () => {
  let component: OrderOverdueComponent;
  let fixture: ComponentFixture<OrderOverdueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderOverdueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderOverdueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
