import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrderDetilsComponent } from './edit-order-detils.component';

describe('EditOrderDetilsComponent', () => {
  let component: EditOrderDetilsComponent;
  let fixture: ComponentFixture<EditOrderDetilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOrderDetilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrderDetilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
