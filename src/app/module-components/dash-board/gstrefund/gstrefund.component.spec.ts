import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GSTRefundComponent } from './gstrefund.component';

describe('GSTRefundComponent', () => {
  let component: GSTRefundComponent;
  let fixture: ComponentFixture<GSTRefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GSTRefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GSTRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
