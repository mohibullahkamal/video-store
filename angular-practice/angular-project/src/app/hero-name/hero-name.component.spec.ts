import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroNameComponent } from './hero-name.component';

describe('HeroNameComponent', () => {
  let component: HeroNameComponent;
  let fixture: ComponentFixture<HeroNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
