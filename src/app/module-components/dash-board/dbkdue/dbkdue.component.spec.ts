import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DBKDueComponent } from './dbkdue.component';

describe('DBKDueComponent', () => {
  let component: DBKDueComponent;
  let fixture: ComponentFixture<DBKDueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DBKDueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DBKDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
