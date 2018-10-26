import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeisDueComponent } from './meis-due.component';

describe('MeisDueComponent', () => {
  let component: MeisDueComponent;
  let fixture: ComponentFixture<MeisDueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeisDueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeisDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
