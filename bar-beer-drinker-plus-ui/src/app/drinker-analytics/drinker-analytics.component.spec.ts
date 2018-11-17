import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkerAnalyticsComponent } from './drinker-analytics.component';

describe('DrinkerAnalyticsComponent', () => {
  let component: DrinkerAnalyticsComponent;
  let fixture: ComponentFixture<DrinkerAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkerAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkerAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
