import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TonnageComponent } from './tonnage.component';

describe('TonnageComponent', () => {
  let component: TonnageComponent;
  let fixture: ComponentFixture<TonnageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonnageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
