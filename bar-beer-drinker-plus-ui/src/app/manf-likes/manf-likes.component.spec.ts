import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManfLikesComponent } from './manf-likes.component';

describe('ManfLikesComponent', () => {
  let component: ManfLikesComponent;
  let fixture: ComponentFixture<ManfLikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManfLikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManfLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
