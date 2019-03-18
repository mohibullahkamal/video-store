import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentDateComponent } from './rent-date.component';

describe('RentDateComponent', () => {
  let component: RentDateComponent;
  let fixture: ComponentFixture<RentDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
