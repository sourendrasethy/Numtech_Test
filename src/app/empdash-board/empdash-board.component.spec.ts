import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdashBoardComponent } from './empdash-board.component';

describe('EmpdashBoardComponent', () => {
  let component: EmpdashBoardComponent;
  let fixture: ComponentFixture<EmpdashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpdashBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpdashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
