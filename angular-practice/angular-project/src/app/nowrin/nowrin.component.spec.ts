import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowrinComponent } from './nowrin.component';

describe('NowrinComponent', () => {
  let component: NowrinComponent;
  let fixture: ComponentFixture<NowrinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowrinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowrinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
