import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BartenderRankingComponent } from './bartender-ranking.component';

describe('BartenderRankingComponent', () => {
  let component: BartenderRankingComponent;
  let fixture: ComponentFixture<BartenderRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BartenderRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BartenderRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
