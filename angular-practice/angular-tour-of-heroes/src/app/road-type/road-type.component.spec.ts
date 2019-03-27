import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadTypeComponent } from './road-type.component';

describe('RoadTypeComponent', () => {
  let component: RoadTypeComponent;
  let fixture: ComponentFixture<RoadTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
